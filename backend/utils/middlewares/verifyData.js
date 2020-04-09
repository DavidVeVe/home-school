const bcrypt = require('bcrypt');
const { findUser } = require('../methods/database');
const { signUp, signIn } = require('../auth/schemaValidation');

const verifySignUpData = async (req, res, next) => {
	const { error, value } = signUp(req.body);
	if (error) return res.status(500).send(error.details[0].message);

	const { email } = value;
	if (await findUser({ type: 'email', payload: email }))
		return res.status(404).send('Email already used');
	next();
};

const verifySignInData = async (req, res, next) => {
	const { error, value } = signIn(req.body);
	if (error) return res.status(500).send(error.details[0].message);

	const { email, password } = value;
	const user = await findUser({ type: 'email', payload: email });
	if (!user) return res.status(400).send('Email is wrong');

	if (!(await bcrypt.compare(password, user.password))) {
		return res.status(400).send('Password is wrong');
	}

	next();
};

module.exports = { verifySignUpData, verifySignInData };
