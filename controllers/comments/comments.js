const createCommentController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Comment Created!",
    });
  } catch (err) {
    res.json(err);
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
