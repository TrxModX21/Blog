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

// GET /api/v1/users/:id
userRoutes.get("/", isLogin, userDetailsController);

// GET /api/v1/users/profile/:id
userRoutes.get("/profile", isLogin, userProfileController);

// PUT /api/v1/users/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", uploadPhotoController);

// PUT /api/v1/users/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", uploadCoverPhotoController);

// PUT /api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", updatePasswordController);

// PUT /api/v1/users/update/:id
userRoutes.put("/update/:id", updateUserController);

module.exports = userRoutes;
