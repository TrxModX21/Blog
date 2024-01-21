const globalErrorHandler = (err, req, res, next) => {
  const status = err.status ? err.status : "failed";
  const msg = err.message;
  const stack = err.stack;
  const statusCode = err.statusCode ? err.statusCode : 500;

  res.status(statusCode).json({
    status,
    msg,
    stack,
  });
};

module.exports = globalErrorHandler;
