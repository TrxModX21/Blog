const registerController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User registered successfully",
    });
  } catch (err) {
    res.json(err);
  }
};

const loginController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User login successfully",
    });
  } catch (err) {
    res.json(err);
  }
};

const userDetailsController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User details",
    });
  } catch (err) {
    res.json(err);
  }
};

const userProfileController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile",
    });
  } catch (err) {
    res.json(err);
  }
};

const uploadPhotoController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile photo",
    });
  } catch (err) {
    res.json(err);
  }
};

const uploadCoverPhotoController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User profile cover",
    });
  } catch (err) {
    res.json(err);
  }
};

const updatePasswordController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User password update",
    });
  } catch (err) {
    res.json(err);
  }
};

const updateUserController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User update",
    });
  } catch (err) {
    res.json(err);
  }
};

const logoutController = async (req, res) => {
  try {
    res.json({
      status: "success",
      user: "User logout",
    });
  } catch (err) {
    res.json(err);
  }
};

module.exports = {
  registerController,
  loginController,
  userDetailsController,
  userProfileController,
  uploadPhotoController,
  uploadCoverPhotoController,
  updatePasswordController,
  updateUserController,
  logoutController,
};
