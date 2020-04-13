const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { newUser } = require('../utils/methods/database');
const {
	verifySignInData,
	verifySignUpData,
} = require('../utils/middlewares/verifyData');
/* const verifyToken = require('../utils/middlewares/verifyToken'); */
const { findUser } = require('../utils/methods/database');

authRouter.post('/register', verifySignUpData, async (req, res) => {
	try {
		const userData = req.body;
		const hashedPassword = await bcrypt.hash(userData.password, 10);
		await newUser(userData, hashedPassword);
		res.send('Register Done');
	} catch (err) {
		console.log(err);
		res.status(500).send({ err });
	}
});

authRouter.post('/login', verifySignInData, async (req, res) => {
	const { email } = req.body;
	const user = await findUser({ type: 'email', payload: email });
	console.log(user);
	try {
		if (user.account === 'Parent') {
			const token = jwt.sign(
				{ ...req.body, account: 'Parent' },
				process.env.SECRET_TOKEN
			);
			return res
				.cookie('auth_token', token)
				.send(await jwt.decode(token, process.env.SECRET_TOKEN));
		} else if (user.account === 'Teacher') {
			const token = jwt.sign(
				{ ...req.body, account: 'Teacher' },
				process.env.SECRET_TOKEN
			);
			return res
				.cookie('auth_token', token)
				.send(await jwt.decode(token, process.env.SECRET_TOKEN));
		}
	} catch (error) {
		return res.send('An error has ocurred');
	}
});

/* 
authRouter.get('/', verifyToken, async (req, res) => {
	const token = req.header('Cookie');
	const newToken = token.substring(11, token.length);
	const { email } = await jwt.decode(newToken, process.env.SECRET_TOKEN);
	const userData = await findUser({ type: 'email', payload: email });
	res.send(userData);
});
 */

module.exports = authRouter;
