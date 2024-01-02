const mongoose = require("mongoose");
const Tour = require("./tourModel").Tour;
// const User = require("./userModel").User;
// const Review = require("../models/");
const reviewSchema = mongoose.Schema(
  {
    review: {
      type: String,
      require: [true, "review can not be empty"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Review must belong to a user"],
    },
    tour: {
      required: [true, "Review must belong to a tour"],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: "user" });
  next();
});
reviewSchema.pre(/^findOneAnd/, async function (next) {
  console.log("inside");
  this.r = await this.model.findOne(this.getQuery());
  // console.log(this.r);
  next();
});
reviewSchema.post(/^findOneAnd/, async function () {
  console.log("inside post");
  // this.r = await this.model.findOne(this.getQuery());
  // console.log(this.r);
  await this.r.constructor.calcAverageRating(this.r.tour);
});
reviewSchema.statics.calcAverageRating = async function (tourID) {
  const statics = await this.aggregate([
    {
      $match: {
        tour: tourID,
      },
    },
    {
      $group: {
        _id: "$tour",
        numOfRatings: {
          $sum: 1,
        },
        avgRating: {
          $avg: "$rating",
        },
      },
    },
  ]);
  console.log("----------------------------------------------------");
  console.log(statics);
  if (statics.length > 0) {
    const tour = await Tour.findByIdAndUpdate(
      tourID,
      {
        ratingsAverage: statics[0].avgRating,
        ratingsQuantity: statics[0].numOfRatings,
      },
      {
        new: true,
      }
    );
  } else {
    const tour = await Tour.findByIdAndUpdate(
      tourID,
      {
        ratingsAverage: 4.5,
        ratingsQuantity: 0,
      },
      {
        new: true,
      }
    );
  }
};

reviewSchema.post("save", async function () {
  await this.constructor.calcAverageRating(this.tour);
});

// findByIdAndUpdate
// findByIdAndDelete

const reviewModel = mongoose.model("Review", reviewSchema);

module.exports = { reviewModel };
