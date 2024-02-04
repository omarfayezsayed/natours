// const { Model } = require("mongoose");
const { asyncWrapper } = require("../utils/asyncWrapper");
const { AppError } = require("../utils/errorClass");
const { apiFeatures } = require("../utils/apiFeatures");
exports.deleteOne = (Model) => {
  return asyncWrapper(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError("No documents found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {},
    });
  });
};
exports.updateOne = (Model) => {
  return asyncWrapper(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      return next(new AppError("no doc found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

exports.createOne = (Model) => {
  return asyncWrapper(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

exports.getOne = (Model, populateOptions) => {
  return asyncWrapper(async (req, res, next) => {
    let query = Model.findById({ _id: req.params.id });
    if (populateOptions) query = query.populate(populateOptions);
    const doc = await query;
    if (!doc) {
      return next(new AppError("no doc Found with that ID", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });
};

exports.getAll = (Model) =>
  asyncWrapper(async (req, res, next) => {
    // To allow for nested GET reviews on tour (hack)
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    console.log(Model, req.query);
    const features = new apiFeatures(Model.find(), req.query, Model);
    features.filter();
    features.sort();
    features.fieldsLimiting();
    features.pagination();
    const doc = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: doc,
    });
  });
