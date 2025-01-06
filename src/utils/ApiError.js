class ApiError extends Error {
  constructor(
    statusCode,
    messgae = "Something went wrong",
    errors = [, (statck = "")]
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = NULL;
    this.message = this.message;
    this.success = false;
    this.erorrs = this.errors;
  }
}
