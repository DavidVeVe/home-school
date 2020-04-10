const Joi = require("@hapi/joi");

const authRouter = require("express").Router();

authRouter.get("/login", (req, res) => {
  res.send("Hello World from, get the routes auth");
});

authRouter.post("/register", (req, res) => {
  res.send("Hello World from, post the routes auth");
});

module.exports = authRouter;
