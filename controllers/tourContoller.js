const { Tour } = require("../models/tourModel");
const { apiFeatures } = require("../utils/apiFeatures");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { AppError } = require("../utils/errorClass");
const factory = require("../controllers/handlerFactory");
const multer = require("multer");
const sharp = require("sharp");

const memoryStorage = multer.memoryStorage();
const filterFiles = (req, file, cb) => {
  if (file.mimetype.split("/")[0] != "image") {
    cb(new AppError("not an image! please upload an image"), false);
  }
  cb(null, true);
};
const upload = multer({ storage: memoryStorage, fileFilter: filterFiles });
const uploadTourImages = upload.fields([
  { name: "imageCover", maxCount: 1 },
  {
    name: "images",
    maxCount: 3,
  },
]);

const processTourImages = asyncWrapper(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();
  console.log("herrreeee");
  req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/tours/${req.body.imageCover}`);
  req.body.images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const tourImageName = `tour-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize(500, 500)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/tours/${tourImageName}`);
      req.body.images.push(tourImageName);
    })
  );

  next();
});
const getAllTours = asyncWrapper(async (req, res, next) => {
  const features = new apiFeatures(Tour.find(), req.query);
  console.log(req.query);
  features.filter();
  features.sort();
  features.fieldsLimiting();
  features.pagination();
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
  uploadTourImages,
  processTourImages,
};
