const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");
const appError = require("../../utils/appError");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

const registerController = async (req, res, next) => {
  const { fullname, email, password } = req.body;

  // Check required field
  if (!fullname || !email || !password) {
    return next(
      appError("Check your requirement field. All field is required")
    );
  }

  try {
    // Check if user already registered (email)
    const userRegistered = await User.findOne({ email });

    // Throw an error
    if (userRegistered) {
      return next(appError("User already exist!"));
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

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(appError("Email and password can't be empty!"));
  }

  try {
    // Check if email exist
    const user = await User.findOne({ email });

    // Throw an error
    if (!user) {
      return next(appError("This email not registering in our database!"));
    }

    // Verify password hash
    const checkPasswordHash = await bcrypt.compare(password, user.password);

    if (!checkPasswordHash) {
      return next(appError("Invalid credentials!"));
    }

    const { fullname, _id } = user;

    res.json({
      status: "success",
      msg: "User login successfully",
      data: { fullname, _id },
      token: generateToken(_id),
    });
  } catch (err) {
    res.json(err);
  }
};

const userDetailsController = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json({
      status: "success",
      user,
    });
  } catch (err) {
    res.json(err);
  }
};

const userProfileController = async (req, res) => {
  try {
    const user = await User.findById(req.user);

    res.json({
      status: "success",
      data: user,
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
