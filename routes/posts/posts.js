const express = require("express");
const multer = require("multer");
const {
  createPostController,
  fetchPostController,
  fetchPostDetailController,
  deletePostController,
  updatePostController,
} = require("../../controllers/posts/posts");
const isLogin = require("../../middlewares/isLogin");
const storage = require("../../config/cloudinary");

const postsRoutes = express.Router();
const upload = multer({ storage });

// POST /api/v1/posts/create
postsRoutes.post(
  "/create",
  isLogin,
  upload.single("post_img"),
  createPostController
);

// GET /api/v1/posts
postsRoutes.get("/", fetchPostController);

// GET /api/v1/posts/:id
postsRoutes.get("/:id", fetchPostDetailController);

// DELETE /api/v1/posts/delete/:id
postsRoutes.delete("/delete/:id", deletePostController);

// PUT /api/v1/posts/update/:id
postsRoutes.put("/update/:id", updatePostController);

module.exports = postsRoutes;
