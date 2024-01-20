const express = require("express");

const commentsRoutes = express.Router();

// POST /api/v1/comments/create
commentsRoutes.post("/create", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment Created!",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET /api/v1/comments/:id
commentsRoutes.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment details!",
    });
  } catch (err) {
    res.json(err);
  }
});

// DELETE /api/v1/comments/:id
commentsRoutes.delete("/delete/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment deleted!",
    });
  } catch (err) {
    res.json(err);
  }
});

// PUT /api/v1/comments/:id
commentsRoutes.put("/update/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment updated!",
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = commentsRoutes;
