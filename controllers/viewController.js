const { Tour } = require("../models/tourModel");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { AppError } = require("../utils/errorClass");

const getOverviewPage = asyncWrapper(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render("overview", {
    tours,
  });
});

const getTourPage = asyncWrapper(async (req, res, next) => {
  console.log(req.params.slug);
  const tour = await Tour.findOne({ slug: req.params.slug });
  console.log(tour);
  if (!tour) {
    return next(new AppError("no tour found with that name"));
  }

  res.status(200).render("tour", {
    tour,
  });
});

const getLoginPage = (req, res, next) => {
  res.status(200).render("login");
};
const getAccount = (req, res, next) => {
  res.status(200).render("account", {
    title: "abc",
  });
};
module.exports = {
  getOverviewPage,
  getTourPage,
  getLoginPage,
  getAccount,
};
