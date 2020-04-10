<<<<<<< HEAD
<<<<<<< HEAD
const Joi = require("@hapi/joi");

const authRouter = require("express").Router();

authRouter.get("/login", (req, res) => {
  res.send("Hello World from, get the routes auth");
});

authRouter.post("/register", (req, res) => {
  res.send("Hello World from, post the routes auth");
=======
=======
>>>>>>> 87f89eb705752ed61028c36808a984913ad8ccdb
const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { newUser } = require('../utils/methods/database');
const {
  verifySignInData,
  verifySignUpData,
} = require('../utils/middlewares/verifyData');
const verifyToken = require('../utils/middlewares/verifyToken');
const { findUser } = require('../utils/methods/database');

authRouter.post('/register', verifySignUpData, async (req, res) => {
  try {
    const userData = req.body;
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    await newUser(userData, hashedPassword);
    res.send('Done');
  } catch (err) {
    console.log(err);
    res.status(500).send({ err });
  }
});

authRouter.post('/login', verifySignInData, async (req, res) => {
  const token = jwt.sign(req.body, process.env.SECRET_TOKEN);
  res.cookie('auth_token', token).send('Hello, you are logged in');
});

authRouter.get('/', verifyToken, async (req, res) => {
<<<<<<< HEAD
	const token = req.header('Cookie');
	const newToken = token.substring(11, token.length);
	const { email } = await jwt.decode(newToken, process.env.SECRET_TOKEN);
	const userData = await findUser({ type: 'email', payload: email });
	res.send(userData);
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
=======
  const token = req.header('Cookie');
  const newToken = token.substring(11, token.length);
  const { email } = await jwt.decode(newToken, process.env.SECRET_TOKEN);
  const userData = await findUser({ type: 'email', payload: email });
  res.send(userData);
>>>>>>> 87f89eb705752ed61028c36808a984913ad8ccdb
});

module.exports = authRouter;
