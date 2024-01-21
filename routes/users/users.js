const express = require("express");
const multer = require("multer");
const {
  registerController,
  loginController,
  userDetailsController,
  userProfileController,
  uploadPhotoController,
  uploadCoverPhotoController,
  updatePasswordController,
  updateUserController,  
} = require("../../controllers/users/users");
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");

const userRoutes = express.Router();
const upload = multer({ storage });

// POST /api/v1/users/register
userRoutes.post("/register", registerController);

// POST /api/v1/users/login
userRoutes.post("/login", loginController);

// GET /api/v1/users/profile
userRoutes.get("/profile", isLogin, userProfileController);

// PUT /api/v1/users/update
userRoutes.put("/update", isLogin, updateUserController);

// PUT /api/v1/users/update-password
userRoutes.put("/update-password", isLogin, updatePasswordController);

// PUT /api/v1/users/profile-photo-upload
userRoutes.put(
  "/profile-photo-upload",
  isLogin,
  upload.single("profile_img"),
  uploadPhotoController
);

// PUT /api/v1/users/cover-photo-upload
userRoutes.put(
  "/cover-photo-upload",
  isLogin,
  upload.single("cover_img"),
  uploadCoverPhotoController
);

// GET /api/v1/users/:id
userRoutes.get("/:id", userDetailsController);

module.exports = userRoutes;
