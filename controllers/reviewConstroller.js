const mongoose = require("mongoose");
const Review = require("../models/reviewModel").reviewModel;
const asyncWrapper = require("../utils/asyncWrapper").asyncWrapper;
const factory = require("../controllers/handlerFactory");
const getAllReviews = asyncWrapper(async (req, res, next) => {
  let filter = {};
  if (req.params.tourId) {
    filter = {
      tour: req.params.tourId,
    };
  }
  console.log(req.params.tourId);
  const reviews = await Review.find(filter);
  res.status(200).json({
    status: "success",
    records: reviews.length,
    data: {
      reviews,
    },
  });
});

const checkReviewData = asyncWrapper(async (req, res, next) => {
  if (!req.body.tour) {
    req.body.tour = req.params.tourId;
  }
  if (!req.body.user) {
    req.body.user = req.user._id;
  }
  next();
});

const getReview = factory.getOne(Review, null);
const addReview = factory.createOne(Review);
const deleteReview = factory.deleteOne(Review);
const updateReview = factory.updateOne(Review);
module.exports = {
  getAllReviews,
  addReview,
  deleteReview,
  getReview,
  updateReview,
  checkReviewData,
};
