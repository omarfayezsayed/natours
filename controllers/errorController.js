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
  return new AppError(message, 400);
};
const sendProductionError = (err, res) => {
  console.log("inside send production");
  console.log(err);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const sendDevelopmentError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
  });
};

const handleJsonWebTokenErrors = () => {
  return new AppError("Invalid token, please log in agine", 401);
};
const globalErrorHandling = (err, req, res, next) => {
  console.error(err);
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
      error = handleValidationErrors(error);
    }
    if (err.name === "JsonWebTokenError") {
      error = handleJsonWebTokenErrors();
    }

    sendProductionError(error, res);
  } else if (process.env.ENV_ENVIRONMENT === "development") {
    sendDevelopmentError(err, res);
  }
};

module.exports = { globalErrorHandling };
