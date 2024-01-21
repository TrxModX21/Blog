const appError = require("../utils/appError");
const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");

const isLogin = (req, res, next) => {
  // GET TOKEN FROM REQUEST HEADER
  const token = getTokenFromHeader(req);

  if (token.status === "failed") {
    return next(appError(token.msg, 401));
  }

  // VERIFY TOKEN
  const tokenResult = verifyToken(token);

  if (tokenResult.status === "failed") {
    return next(appError("Invalid/expired token, please login", 401));
  } else {
    // SAVE THE USER INTO REQUEST OBJECT
    req.user = tokenResult.id;
    next();
  }
};

module.exports = isLogin;
