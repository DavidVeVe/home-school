const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { newUser, findUser } = require('../utils/methods/database');
const {
	verifySignInData,
	verifySignUpData,
} = require('../utils/middlewares/verifyData');

router.post('/register', verifySignUpData, async (req, res) => {
	try {
		const userData = req.body;
		const hashedPassword = await bcrypt.hash(userData.password, 10);
		const user = await newUser(userData, hashedPassword);
		const token = jwt.sign({ ...user }, process.env.SECRET_TOKEN);
		res.send(await jwt.decode(token, process.env.SECRET_TOKEN));
	} catch (err) {
		console.log(err);
		res.status(500).send('An error has ocurred');
	}
});

router.post('/login', verifySignInData, async (req, res) => {
	const { email } = req.body;
	try {
		const user = await findUser({ type: 'email', payload: email });
		const token = jwt.sign({ ...user }, process.env.SECRET_TOKEN);
		res.send(await jwt.decode(token, process.env.SECRET_TOKEN));
	} catch (error) {
		res.status(500).send('An error has ocurred');
	}
});

module.exports = router;
