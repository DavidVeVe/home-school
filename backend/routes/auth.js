const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Parent, Teacher } = require('../database/index');
const {
	verifySignInData,
	verifySignUpData,
} = require('../utils/middlewares/verifyData');

router.post('/register', verifySignUpData, async (req, res) => {
	try {
		const userData = req.body;
		const hashedPassword = await bcrypt.hash(userData.password, 10);
		let user = null;
		if (userData.account === 'Parent') {
			const parent = new Parent({ ...userData, password: hashedPassword });
			user = await parent.save();
		} else if (userData.account === 'Teacher') {
			const teacher = new Teacher({
				...userData,
				password: hashedPassword,
			});
			user = await teacher.save();
		}
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
		let user = await Parent.findOne({ email });
		if (user === null) {
			user = await Teacher.findOne({ email });
		}
		const token = jwt.sign({ ...user }, process.env.SECRET_TOKEN);
		res.send(await jwt.decode(token, process.env.SECRET_TOKEN));
	} catch (error) {
		res.status(500).send('An error has ocurred');
	}
});

module.exports = router;
