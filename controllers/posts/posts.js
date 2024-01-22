const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const appError = require("../../utils/appError");

const createPostController = async (req, res, next) => {
  const { title, description, category } = req.body;

  try {
    // VALIDATE THE FORM FIELD
    if (!title || !description || !category || !req.file) {
      return next(
        appError(
          "title, description, category, and image field are required!",
          400
        )
      );
    }

    // FIND THE USER
    const user = await User.findById(req.user);

    // CREATE POST
    const post = await Post.create({
      title,
      description,
      category,
      user: user._id,
      image: req.file.path,
    });

    // PUSH CREATED POST INTO USER POST LIST
    user.posts.push(post._id);

    // RESAVE USER
    user.save();

    return res.json({
      status: "success",
      data: post,
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const fetchPostsController = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("comments");

    return res.json({
      status: "success",
      total: posts.length,
      data: posts,
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const fetchSinglePostController = async (req, res, next) => {
  try {
    // GET ID FROM PARAMS
    const id = req.params.id;

    // GET THE POST
    const post = await Post.findById(id).populate('comments');

    return res.json({
      status: "success",
      data: post,
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return next(appError("Post not found!", 404));
    }
    return next(appError(err.message));
  }
};

const deletePostController = async (req, res, next) => {
  try {
    // FIND THE POST
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.user);

    // CHECK IF THE POST BELONGS TO CURRENT USER LOGIN
    if (post.user.toString() !== req.user) {
      return next(appError("You are not allowed to delete this post!", 403));
    }

    // DELETE THE POST
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    user.posts.splice(user.posts.indexOf(req.params.id), 1);

    // RESAVE USER
    user.save();

    return res.json({
      status: "success",
      msg: "Post deleted!",
      data: deletedPost,
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return next(appError("Post not found!", 404));
    }
    return next(appError(err.message));
  }
};

const updatePostController = async (req, res, next) => {
  const { title, description, category } = req.body;

  try {
    // FIND THE POST
    const post = await Post.findById(req.params.id);

    // CHECK IF THE POST BELONGS TO CURRENT USER LOGIN
    if (post.user.toString() !== req.user) {
      return next(appError("You are not allowed to update this post!", 403));
    }

    // UPDATE THE POST
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        category,
        image: req.file ? req.file.path : post.image,
      },
      {
        new: true,
      }
    );

    return res.json({
      status: "success",
      data: updatedPost,
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return next(appError("Post not found!", 404));
    }
    return next(appError(err.message));
  }
};

module.exports = {
  createPostController,
  fetchPostsController,
  fetchSinglePostController,
  deletePostController,
  updatePostController,
};
