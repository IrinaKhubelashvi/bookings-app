const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const authorize = require("./middleware/authorize");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");
const logger = require("./utils/logger");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// authorize
app.use(authorize);

// Routes
app.use("/api", routes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
