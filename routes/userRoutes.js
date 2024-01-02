const express = require("express");
const router = express.Router();

const usercontroller = require("../controllers/userController");
const authController = require("../controllers/authController");
router.post("/signUp", authController.signUp);
router.post("/login", authController.login);
router.patch("/updatePassword", [
  authController.routeProtect,
  authController.updatePassword,
]);
router.get("/logout", authController.logout);
router.get("/me", [
  authController.routeProtect,
  usercontroller.getMe,
  usercontroller.getUser,
]);
router.post("/forgotPassword", authController.forgotPassword);
router.get("/", usercontroller.getAllUsers);
router.post("/", usercontroller.createUser);
router.get("/:id", usercontroller.getUser);
router.patch("/resetPassword/:token", authController.resetPassword);
// router.patch("/:id", usercontroller.updateMe);

router.patch("/updateMe", [
  authController.routeProtect,
  usercontroller.updateMe,
]);

router.delete("/deleteMe", [
  authController.routeProtect,
  usercontroller.deleteMe,
]);
router.delete("/:id", [
  authController.routeProtect,
  authController.restrictTo("admin"),
  usercontroller.deleteUser,
]);
router.patch("/:id", usercontroller.updateUser);

module.exports = { router };
