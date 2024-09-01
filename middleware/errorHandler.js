const logger = require("../utils/logger");

// Centralized error-handling middleware
const errorHandler = (err, req, res, next) => {
  logger.error("Unhandled error occurred", { error: err });
  res.status(500).json({ message: "An unexpected error occurred" });
};

module.exports = errorHandler;
