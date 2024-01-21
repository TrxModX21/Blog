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

const fetchPostsController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post fetched!",
    });
  } catch (err) {
    res.json(err);
  }
};

const fetchSinglePostController = async (req, res, next) => {
  try {
    // GET ID FROM PARAMS
    const id = req.params.id;

    // GET THE POST
    const post = await Post.findById(id);

    res.json({
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

const deletePostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post deleted!",
    });
  } catch (err) {
    res.json(err);
  }
};

const updatePostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post updated!",
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  createPostController,
  fetchPostsController,
  fetchSinglePostController,
  deletePostController,
  updatePostController,
};
