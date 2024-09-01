const express = require("express");
const router = express.Router();
const bookingRoutes = require("./bookingRoutes");

// You can add route-specific middleware here if needed
router.use("/properties", bookingRoutes);

module.exports = router;
