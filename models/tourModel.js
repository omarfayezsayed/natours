const mongoose = require("mongoose");
const slugify = require("slugify");
// const User = require("./userModel").User;
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      // Custom Validators
      required: [true, "A tour must have a name"],
      minLength: [10, "A tour name must have at least 10 characters"],
      maxLength: [40, "A tour name must have at most 40 characters"],
    },
    slug: String,
    duration: {
      type: String,
      require: [true, "A tour must have a duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "a tour must have a group size"],
    },
    difficulty: {
      type: String,
      require: [true, "a tour must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "difficulty must be easy , medium , difficult",
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be greater than 1.0"],
      max: [5, "Rating must be less than 5.0"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val < this.price;
        },
        message:
          "Discount price ({VALUE}) should be less than the reqular price ",
      },
    },
    summary: {
      type: String,
      trim: "true",
      required: [true, "A tour must have a summary"],
    },
    guides: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a cover image"],
    },
    images: [String], // Array of strings
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    startDates: [Date],
    secretTour: {
      type: Boolean,
      default: false,
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

// tourSchema.pre("save", async function () {
//   let embeddedGuides = [];
//   for (const el of this.guides) {
//     const user = await User.findById(el);
//     console.log(user);
//     embeddedGuides.push(user);
//   }

//   this.guides = embeddedGuides;

//   // console.log(embeddedGuides);
// });

tourSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
tourSchema.pre(/^find/, function (next) {
  this.populate({
    path: "guides",
    select: "-__v ",
  }).populate({
    path: "reviews",
  });

  next();
});
tourSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "tour",
});
const Tour = mongoose.model("Tour", tourSchema);

module.exports = { Tour };
