const getTokenFromHeader = (req) => {
  const { authorization } = req.headers;

  if (authorization && authorization.split(" ")[1] != undefined) {
    const token = authorization.split(" ")[1];
    return token;
  } else {
    return {
      status: "failed",
      msg: "There is no token in the header",
    };
  }
};

module.exports = getTokenFromHeader;
