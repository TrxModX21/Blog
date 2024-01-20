const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");

const registerController = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // Check if user already registered (email)
    const userRegistered = await User.findOne({ email });

    // Throw an error
    if (userRegistered) {
      res.json({
        status: "failed",
        msg: "User already exist!",
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    // REGISTERING THE USER
    const user = await User.create({
      fullname,
      email,
      password: passwordHashed,
    });

    res.json({
      status: "success",
      msg: "User registered successfully",
      data: user,
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
