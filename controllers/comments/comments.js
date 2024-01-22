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
      post: req.params.id,
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

const deleteCommentController = async (req, res, next) => {
  try {
    // FIND THE COMMENT POST AND USER
    const comment = await Comment.findById(req.params.id);
    const post = await Post.findById(comment.post);
    const user = await User.findById(req.user);

    // CHECK IF THE COMMENT BELONGS TO CURRENT USER LOGIN
    if (comment.user.toString() !== req.user) {
      return next(appError("You are not allowed to delete this comment!", 403));
    }

    // DELETE THE COMMENT
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    post.comments.splice(post.comments.indexOf(req.params.id), 1);
    user.comments.splice(user.comments.indexOf(req.params.id), 1);

    // RESAVE USER
    post.save();
    user.save();

    return res.json({
      status: "success",
      msg: "Comment deleted!",
      data: deletedComment,
    });
  } catch (err) {
    if (err.kind === "ObjectId") {
      return next(appError("Comment not found!", 404));
    }
    return next(appError(err.message));
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
