const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //   const token = req.header("auth_token");
  const token = req.header("Cookie");
  if (!token) {
    return res.status(404).send("Welcome to the API");
  }

  const newToken = token.substring(11, token.length);
  const verified = jwt.verify(newToken, process.env.SECRET_TOKEN);

  if (!verified) return res.status(404).send("Invalid Token");
  next();
};

module.exports = verifyToken;
