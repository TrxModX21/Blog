const express = require("express");
const {
  registerController,
  loginController,
  userDetailsController,
  userProfileController,
  uploadPhotoController,
  uploadCoverPhotoController,
  updatePasswordController,
  updateUserController,
  logoutController,
} = require("../../controllers/users/users");
const isLogin = require("../../middlewares/isLogin");

const userRoutes = express.Router();

// POST /api/v1/users/register
userRoutes.post("/register", registerController);

// POST /api/v1/users/login
userRoutes.post("/login", loginController);

// GET /api/v1/users/logout
userRoutes.get("/logout", logoutController);

// GET /api/v1/users/profile
userRoutes.get("/profile", isLogin, userProfileController);

// PUT /api/v1/users/update
userRoutes.put("/update", isLogin, updateUserController);

// PUT /api/v1/users/update-password
userRoutes.put("/update-password", isLogin, updatePasswordController);

// GET /api/v1/users/:id
userRoutes.get("/:id", userDetailsController);

// PUT /api/v1/users/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", uploadPhotoController);

// PUT /api/v1/users/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", uploadCoverPhotoController);

module.exports = userRoutes;
