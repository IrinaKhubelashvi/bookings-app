const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header is missing" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token is missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }
    // Attach the token to the request object
    req.jwtToken = token;

    // Optionally attach the decoded user information to the request object
    req.user = user;

    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authorize;
