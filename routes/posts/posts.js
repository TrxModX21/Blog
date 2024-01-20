const express = require("express");

const postsRoutes = express.Router();

// POST /api/v1/posts/create
postsRoutes.post("/create", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post Created!",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET /api/v1/posts
postsRoutes.get("/", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post fetched!",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET /api/v1/posts/:id
postsRoutes.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post details!",
    });
  } catch (err) {
    res.json(err);
  }
});

// DELETE /api/v1/posts/delete/:id
postsRoutes.delete("/delete/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post deleted!",
    });
  } catch (err) {
    res.json(err);
  }
});

// PUT /api/v1/posts/update/:id
postsRoutes.put("/update/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post updated!",
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = postsRoutes;
