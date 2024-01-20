require("dotenv").config();
const express = require("express");
require("./config/dbConnect");

const app = express();

// Middlewares
// Routes
// Error handler middlewares

// Listen server
const PORT = process.env.PORT || 2121;
app.listen(PORT, console.log(`server is running on PORT: ${PORT}`));
