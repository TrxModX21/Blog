const express = require("express");
const {
  createPostController,
  fetchPostController,
  fetchPostDetailController,
  deletePostController,
  updatePostController,
} = require("../../controllers/posts/posts");

const postsRoutes = express.Router();

// POST /api/v1/posts/create
postsRoutes.post("/create", createPostController);

// GET /api/v1/posts
postsRoutes.get("/", fetchPostController);

// GET /api/v1/posts/:id
postsRoutes.get("/:id", fetchPostDetailController);

// DELETE /api/v1/posts/delete/:id
postsRoutes.delete("/delete/:id", deletePostController);

// PUT /api/v1/posts/update/:id
postsRoutes.put("/update/:id", updatePostController);

module.exports = postsRoutes;
