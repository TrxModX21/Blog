const express = require("express");
const {
  createCommentController,
  commentDetailController,
  deleteCommentController,
  updateCommentController,
} = require("../../controllers/comments/comments");

const commentsRoutes = express.Router();

// POST /api/v1/comments/create
commentsRoutes.post("/create", createCommentController);

// GET /api/v1/comments/:id
commentsRoutes.get("/:id", commentDetailController);

// DELETE /api/v1/comments/:id
commentsRoutes.delete("/delete/:id", deleteCommentController);

// PUT /api/v1/comments/:id
commentsRoutes.put("/update/:id", updateCommentController);

module.exports = commentsRoutes;
