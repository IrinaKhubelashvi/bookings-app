const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const { validateWeekQuery } = require("../middleware/validateWeekQuery");

// Define route with middleware validation
router.get("/:id/bookings", validateWeekQuery, bookingController.getBookings);

module.exports = router;
