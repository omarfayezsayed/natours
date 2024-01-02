const express = require("express");
const controller = require("../controllers/tourContoller");
const authController = require("../controllers/authController");
const reviewController = require("../controllers/reviewConstroller");
const reviewRouter = require("../routes/reviewRoutes").router;
const router = express.Router();
router.use("/:tourId/reviews", reviewRouter);
router.get("/month-plan/:year", controller.getMonthlyPlan);
router.get("/tours-stat", controller.getToursStatistics);
router.get("/", controller.getAllTours);
router.post("/", controller.addTour);
router.get("/:id", controller.getTour);
router.patch("/:id", controller.updateTour);

router.delete("/:id", [
  authController.routeProtect,
  authController.restrictTo("admin", "lead-guide"),
  controller.deleteTour,
]);
// router.post("/:tourId/reviews", [
//   authController.routeProtect,
//   reviewController.checkReviewData,
//   reviewController.addReview,
// ]);

// post tours/:tourId/reviews

// router.route("/tours-stat").get(controller.toursStatistics);

module.exports = { router };
