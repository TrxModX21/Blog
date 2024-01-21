const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) {
      return {
        status: "failed",
        msg: '"Token is not valid!"',
      };
    } else {
      return decoded;
    }
  });
};

module.exports = verifyToken;
