const express = require("express");
const multer = require("multer");
const {
  createPostController,
  fetchPostsController,
  fetchSinglePostController,
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
postsRoutes.get("/", fetchPostsController);

// GET /api/v1/posts/:id
postsRoutes.get("/:id", fetchSinglePostController);

// DELETE /api/v1/posts/delete/:id
postsRoutes.delete("/delete/:id", isLogin, deletePostController);

// PUT /api/v1/posts/update/:id
postsRoutes.put(
  "/update/:id",
  isLogin,
  upload.single("post_img"),
  updatePostController
);

module.exports = postsRoutes;
