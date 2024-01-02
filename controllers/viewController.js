const Tour = require("../models/tourModel").Tour;
const asyncWrapper = require("../utils/asyncWrapper").asyncWrapper;

const getOverviewPage = asyncWrapper(async (req, res, next) => {
  const tours = await Tour.find();
  res.status(200).render("overview", {
    tours,
  });
});

const getTourPage = asyncWrapper(async (req, res, next) => {
  console.log(req.params.slug);
  const tour = await Tour.find({ slug: req.params.slug });
  console.log(tour[0]);
  res.status(200).render("tour", {
    tour: tour[0],
  });
});

const getLoginPage = (req, res, next) => {
  res.status(200).render("login");
};
module.exports = {
  getOverviewPage,
  getTourPage,
  getLoginPage,
};
