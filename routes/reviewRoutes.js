const express = require("express");
const reviewController = require("../controllers/reviewConstroller");
const authController = require("../controllers/authController");
const router = express.Router({ mergeParams: true }); // to access the id in the url

router.get("/", reviewController.getAllReviews);
router.get("/:id", reviewController.getReview);
router.post("/", [
  authController.routeProtect,
  reviewController.checkReviewData,
  reviewController.addReview,
]);
router.delete("/:id", reviewController.deleteReview);
router.patch("/:id", reviewController.updateReview);
module.exports = { router };
