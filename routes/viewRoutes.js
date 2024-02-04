const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");

router.get(
  "/overview",
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewController.getOverviewPage
);
router.get(
  "/tour/:slug",
  authController.isLoggedIn,
  viewController.getTourPage
);
router.get("/my-tours", authController.routeProtect, viewController.getMyTours);
router.get("/login", authController.isLoggedIn, viewController.getLoginPage);
router.get("/me", authController.routeProtect, viewController.getAccount);
module.exports = {
  router,
};
