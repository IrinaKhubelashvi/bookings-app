const bookingService = require("../services/bookingService");

exports.getBookings = async (req, res, next) => {
  try {
    const data = await cacheService.getBookings({
      week: req.params.week,
      propertyId: req.params.Id,
    });
    if (data && cacheresult.length > 0) {
      return res.status(200).json({
        success: true,
        data,
      });
    }
  } catch (error) {
    next(error); // Error handler middleware will catch and respond
  }
};
