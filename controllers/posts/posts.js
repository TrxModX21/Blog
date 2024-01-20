const createPostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post Created!",
    });
  } catch (err) {
    res.json(err);
  }
};

const fetchPostController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post fetched!",
    });
  } catch (err) {
    res.json(err);
  }
};

const fetchPostDetailController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "Post details!",
    });
  } catch (err) {
    res.json(err);
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
  fetchPostController,
  fetchPostDetailController,
  deletePostController,
  updatePostController,
};
