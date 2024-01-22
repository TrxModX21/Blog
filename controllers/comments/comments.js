const Comment = require("../../models/comment/Comment");
const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const appError = require("../../utils/appError");

const createCommentController = async (req, res, next) => {
  const { message } = req.body;
  try {
    // FIND THE POST && USER
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.user);

    // CREATE THE COMMENT
    const comment = await Comment.create({
      user: user._id,
      message,
    });

    // PUSH THE COMMENT TO OTHER MODEL
    post.comments.push(comment._id);
    user.comments.push(comment._id);

    // RESAVE MODEL
    await post.save();
    await user.save();

    return res.json({
      status: "success",
      data: comment,
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const commentDetailController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment details!",
    });
  } catch (err) {
    res.json(err);
  }
};

const deleteCommentController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment deleted!",
    });
  } catch (err) {
    res.json(err);
  }
};

const updateCommentController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment updated!",
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  createCommentController,
  commentDetailController,
  deleteCommentController,
  updateCommentController,
};
