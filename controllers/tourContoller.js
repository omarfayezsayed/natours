const { Tour } = require("../models/tourModel");
const { apiFeatures } = require("../utils/apiFeatures");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { AppError } = require("../utils/errorClass");
const factory = require("../controllers/handlerFactory");
const getAllTours = asyncWrapper(async (req, res, next) => {
  // console.log(req.headers);
  console.log("inside all controller");
  const features = new apiFeatures(Tour.find(), req.query);
  features.filter();
  features.sort();
  features.fieldsLimiting();
  features.pagination();
  features;
  // console.log(tours);
  const tours = await features.query;
  console.log("asdnjagdgsfd");
  res.status(200).json({
    status: "success",
    records: tours.length,
    data: {
      tours,
    },
  });
});
// const tour = await Tour.findById({ _id: req.params.id }).populate("reviews");

const getTour = factory.getOne(Tour, { path: "reviews" });
const addTour = factory.createOne(Tour);
const updateTour = factory.updateOne(Tour);
const deleteTour = factory.deleteOne(Tour);

const getToursStatistics = asyncWrapper(async (req, res, next) => {
  const statistics = await Tour.aggregate([
    {
      $group: {
        _id: "$difficulty",
        maxPrice: {
          $max: "$price",
        },
        minPrice: {
          $min: "$price",
        },
        avgPrice: {
          $avg: "$price",
        },
        numOfRatings: {
          $sum: "$ratingsQuantity",
        },
        count: {
          $sum: 1,
        },
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    statistics,
  });
});

const getMonthlyPlan = asyncWrapper(async (req, res, next) => {
  const year = req.params.year * 1;
  console.log(year);

  const plan = await Tour.aggregate([
    {
      $unwind: "$startDates",
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },

    {
      $group: {
        _id: {
          $month: "$startDates",
        },
        numOfTours: {
          $sum: 1,
        },
        tours: {
          $push: "$name",
        },
      },
    },
    {
      $sort: {
        numOfTours: -1,
      },
    },
    {
      $addFields: {
        month: "$_id",
      },
    },
    {
      $project: {
        _id: 0,
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    data: {
      plan,
    },
  });
});
module.exports = {
  getAllTours,
  getTour,
  addTour,
  updateTour,
  deleteTour,
  getToursStatistics,
  getMonthlyPlan,
};
