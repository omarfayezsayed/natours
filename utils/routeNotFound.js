const { AppError } = require("./errorClass");

const routeNotFound = (req, res, next) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server`, 404)
  );
};

module.exports = { routeNotFound };
