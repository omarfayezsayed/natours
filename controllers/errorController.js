const { AppError } = require("../utils/errorClass");

const handleCastErrors = (err) => {
  console.log(err.value._id);
  const message = `Id with value ${err.value._id} is not valid`;
  const nw = new AppError(message, 400);
  return nw;
};

const handleDuplicateErrors = (err) => {
  const value = err.keyValue.name;
  const message = `Duplicate field value: ${value} try another one `;
  return new AppError(message, 400);
};

const handleValidationErrors = (err) => {
  const values = Object.values(err.errors).map((el) => el.message);
  const message = `${values.join(". ")}`;
  console.log("ms", message);
  return new AppError(message, 400);
};
const sendProductionError = (err, req, res) => {
  console.log(req.originalUrl);
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      console.log("inside err", err.message);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      res.status(err.statusCode).json({
        status: "error",
        message: "somthing went very wrong",
      });
    }
  } else {
    if (err.isOperational) {
      console.log("inside err productiom ", err.message);
      res.status(err.statusCode).render("error", {
        msg: err.message,
      });
    } else {
      res.status(err.statusCode).json("error", {
        msg: "somthing went very wrong",
      });
    }
  }
};

const sendDevelopmentError = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
    });
  } else {
    console.log(err.message);
    res.status(err.statusCode).render("error", {
      msg: err.message,
    });
  }
};

const handleJsonWebTokenErrors = () => {
  return new AppError("Invalid token, please log in agine", 401);
};
const globalErrorHandling = (err, req, res, next) => {
  // console.error(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  let error = { ...err };
  error.message = err.message;
  if (process.env.ENV_ENVIRONMENT === "production") {
    if (err.name === "CastError") {
      error = handleCastErrors(error);
    }
    if (err.code === 11000) {
      error = handleDuplicateErrors(error);
    }
    if (err.name === "ValidationError") {
      console.log("validation error");
      error = handleValidationErrors(error);
    }
    if (err.name === "JsonWebTokenError") {
      error = handleJsonWebTokenErrors();
    }

    sendProductionError(error, req, res);
  } else if (process.env.ENV_ENVIRONMENT === "development") {
    sendDevelopmentError(err, req, res);
  }
};

module.exports = { globalErrorHandling };
