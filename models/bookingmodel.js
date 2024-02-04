const mongoose = require("mongoose");
const { number } = require("sharp/lib/is");
// const Tour = require("./tourModel").Tour;
// const User = require("./userModel").User;
// const Review = require("../models/");
const bookingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "booking must belong to a user"],
    },
    tour: {
      required: [true, "booking must belong to a tour"],
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    price: {
      type: Number,
      required: [true, "Booking must have a price"],
    },
    paid: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: number,
      default: 1,
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

bookingSchema.pre(/^find/, function (next) {
  this.populate({
    path: "tour",
  }).populate({
    path: "user",
  });
  next();
});
const Booking = mongoose.model("Booking", bookingSchema);
module.exports = { Booking };
