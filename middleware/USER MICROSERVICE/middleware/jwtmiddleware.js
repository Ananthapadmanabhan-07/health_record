const jwt = require('jsonwebtoken');
const secret_key =process.env.secret_key;

// Middleware to verify JWT token

const jwtMiddleware = (req, res, next) => {
  console.log("inside jwt middleware");
  try {
    const token = req.headers['authorization'].split(" ")[1];
    console.log(token);

    if (token) {
      const jwtResponse = jwt.verify(token, secret_key);
      console.log(jwtResponse);

      req.payload =jwtResponse.userId ;
      next();
    } else {
      res.status(401).json("Please provide token");
    }
  } catch (err) {
    res.status(403).json("Please login");
  }
};

module.exports = jwtMiddleware;