const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const expressSantizater = require("express-mongo-sanitize");
const xssClean = require("xss-clean");
const path = require("path");
const cookieParser = require("cookie-parser");
// set some security packages

app.use(helmet({ contentSecurityPolicy: false }));
// limit request from ip to prevent Dos attacks
const apiLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 15 minutes
  max: 100,
  message:
    "Too many requests created from this IP, please try again after one hour",
});
require("dotenv").config();
// body parser read data from body into req.body with maximum 10 kb body
app.use(cookieParser());
app.use(
  express.json({
    limit: "10kb",
  })
);
// app.use(apiLimiter);
// middleware to prevent data santization
app.use(expressSantizater());
// middleware to prevent cross site scripting
app.use(xssClean());

// serve public folders
app.use(express.static(path.join(__dirname, "public")));

// set up the views path
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

const TourRouter = require("./routes/tourRoutes").router;
const userRouter = require("./routes/userRoutes").router;
const reviewRouter = require("./routes/reviewRoutes").router;
const viewRouter = require("./routes/viewRoutes").router;
const { routeNotFound } = require("./utils/routeNotFound");
const { globalErrorHandling } = require("./controllers/errorController");

// Routes
app.use("/", viewRouter);
app.use("/api/v1/tours", TourRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/reviews", reviewRouter);
app.use("*", routeNotFound);

app.use(globalErrorHandling);
module.exports = { app };
