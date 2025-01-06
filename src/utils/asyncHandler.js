const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, req, next);
  } catch (error) {
    res.status(error.code || 500).json({
      succcess: false,
      message: error.message,
    });
  }
};
export { asyncHandler };
