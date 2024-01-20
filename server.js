require("dotenv").config();
const express = require("express");
require("./config/dbConnect");
const userRoutes = require("./routes/users/users");
const postsRoutes = require("./routes/posts/posts");
const commentsRoutes = require("./routes/comments/comments");

const app = express();

// Middlewares

// ROUTES
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// USERS ROUTES
app.use("/api/v1/users", userRoutes);

// POSTS ROUTES
app.use("/api/v1/posts", postsRoutes);

// COMMENTS ROUTES
app.use('/api/v1/comments', commentsRoutes);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Error handler middlewares

// Listen server
const PORT = process.env.PORT || 2121;
app.listen(PORT, console.log(`server is running on PORT: ${PORT}`));
