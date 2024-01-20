const express = require("express");

const userRoutes = express.Router();

// POST /api/v1/users/register
userRoutes.post("/register", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User registered successfully",
    });
  } catch (err) {
    res.json(err);
  }
});

// POST /api/v1/users/login
userRoutes.post("/login", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User login successfully",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET /api/v1/users/:id
userRoutes.get("/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User details",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET /api/v1/users/profile/:id
userRoutes.get("/profile/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile",
    });
  } catch (err) {
    res.json(err);
  }
});

// PUT /api/v1/users/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile photo",
    });
  } catch (err) {
    res.json(err);
  }
});

// PUT /api/v1/users/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile cover",
    });
  } catch (err) {
    res.json(err);
  }
});

// PUT /api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User password update",
    });
  } catch (err) {
    res.json(err);
  }
});

// PUT /api/v1/users/update/:id
userRoutes.put("/update/:id", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User update",
    });
  } catch (err) {
    res.json(err);
  }
});

// GET /api/v1/users/logout
userRoutes.get("/logout", async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User logout",
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = userRoutes;
