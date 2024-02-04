const express = require("express");
// const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");
const bookingController = require("../controllers/bookingController");
const router = express.Router();

router.get("/", bookingController.getAllBookings);
router.get(
  "/checkout-session/:tourId",
  authController.routeProtect,
  bookingController.getCheckoutSession
);
router.get("/bookingId", bookingController.getBooking);
router.delete("/bookingId", bookingController.deleteBooking);
router.post("/createBookingCheckout", bookingController.createBookingCheckout);

module.exports = {
  router,
};
