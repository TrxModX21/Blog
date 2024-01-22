const bcrypt = require("bcryptjs");
const User = require("../../models/user/User");
const appError = require("../../utils/appError");
const generateToken = require("../../utils/generateToken");

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

    return res.json({
      status: "success",
      msg: "User registered successfully",
      data: user,
    });
  } catch (err) {
    return next(appError(err.message));
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
      return next(
        appError(
          "This email not registering in our database, please register first!"
        )
      );
    }

    // Verify password hash
    const checkPasswordHash = await bcrypt.compare(password, user.password);

    if (!checkPasswordHash) {
      return next(appError("Invalid credentials!"));
    }

    const { fullname, _id } = user;

    return res.json({
      status: "success",
      msg: "User login successfully",
      data: { fullname, _id },
      token: generateToken(_id),
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const userDetailsController = async (req, res, next) => {
  try {
    // GET USER ID FROM PARAMS
    const userId = req.params.id;
    const { fullname, email, posts, comments } = await User.findById(userId)
      .populate("posts")
      .populate("comments");

    return res.json({
      status: "success",
      data: {
        fullname,
        email,
        posts,
        comments,
      },
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const userProfileController = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);

    return res.json({
      status: "success",
      data: user,
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const uploadPhotoController = async (req, res, next) => {
  try {
    if (req.file) {
      const { fullname, email, profileImage } = await User.findByIdAndUpdate(
        req.user,
        {
          profileImage: req.file.path,
        },
        { new: true }
      );

      return res.json({
        status: "success",
        msg: "User profile photo updated!",
        data: { fullname, email, profileImage },
      });
    }
    return next(appError("Please send image file!"));
  } catch (err) {
    return next(appError(err.message));
  }
};

const uploadCoverPhotoController = async (req, res, next) => {
  try {
    if (req.file) {
      const { fullname, email, coverImage } = await User.findByIdAndUpdate(
        req.user,
        {
          coverImage: req.file.path,
        },
        { new: true }
      );

      return res.json({
        status: "success",
        msg: "User profile photo updated!",
        data: { fullname, email, coverImage },
      });
    }
    return next(appError("Please send image file!"));
  } catch (err) {
    return next(appError(err.message));
  }
};

const updatePasswordController = async (req, res, next) => {
  const { password } = req.body;

  try {
    // CHECK IF USER UPDATING THE PASSWORD
    if (password) {
      // HASH PASSWORD
      const salt = await bcrypt.genSalt(10);
      const passwordHashed = await bcrypt.hash(password, salt);

      // UPDATE USER
      await User.findByIdAndUpdate(
        req.user,
        { password: passwordHashed },
        { new: true }
      );
    }

    res.json({
      status: "success",
      user: "User password updated!",
    });
  } catch (err) {
    return next(appError(err.message));
  }
};

const updateUserController = async (req, res, next) => {
  const { fullname, email } = req.body;

  try {
    // GET CURRENT USER INFO
    const currentUser = await User.findById(req.user);

    // CHECK EMAIL IS NOT TAKEN
    if (email) {
      const emailTaken = await User.findOne({ email });

      if (emailTaken) {
        if (emailTaken.email == currentUser.email) {
          return res.json({
            status: "success",
            msg: "Data updated!",
            data: currentUser,
          });
        }
        return next(appError("Email is taken", 400));
      }
    }

    // UPDATE THE USER
    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      {
        fullname,
        email,
      },
      {
        new: true,
      }
    );

    return res.json({
      status: "success",
      msg: "Data updated!",
      data: updatedUser,
    });
  } catch (err) {
    return next(appError(err.message));
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
};
