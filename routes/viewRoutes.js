const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const authController = require("../controllers/authController");
router.use(authController.isLoggedIn);
router.get("/overview", viewController.getOverviewPage);
router.get("/tour/:slug", viewController.getTourPage);
router.get("/login", viewController.getLoginPage);
module.exports = {
  router,
};
