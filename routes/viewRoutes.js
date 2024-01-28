const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");

router.get(
  "/overview",
  authController.isLoggedIn,
  viewController.getOverviewPage
);
router.get(
  "/tour/:slug",
  authController.isLoggedIn,
  viewController.getTourPage
);
router.get("/login", authController.isLoggedIn, viewController.getLoginPage);
router.get("/me", authController.routeProtect, viewController.getAccount);
module.exports = {
  router,
};
