const moment = require("moment");

exports.validateWeekQuery = (req, res, next) => {
  const week = req.query.week;

  // Check if week is provided
  if (!week) {
    return res.status(400).json({
      success: false,
      message: "The 'week' query parameter is required.",
    });
  }

  // Check if week is a numeric value
  if (!/^\d+$/.test(week)) {
    return res.status(400).json({
      success: false,
      message: "The 'week' query parameter must be a numeric value.",
    });
  }

  // Convert the week to an integer
  const weekNumber = parseInt(week, 10);

  // Get the current week number (1-52 or 1-53 depending on the year)
  const currentWeekNumber = moment().isoWeek();

  // Check if week is greater than or equal to the current week
  if (weekNumber < currentWeekNumber) {
    return res.status(400).json({
      success: false,
      message: `The 'week' query parameter must be greater than or equal to the current week (${currentWeekNumber}).`,
    });
  }

  // we might want to validate property
  next();
};
