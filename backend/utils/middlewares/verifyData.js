const bcrypt = require('bcrypt');
const { findUser } = require('../methods/database');
const {
	signUpParents,
	signUpTeachers,
	signIn,
	addChild,
} = require('../auth/schemaValidation');

const verifySignUpData = async (req, res, next) => {
	const { account } = req.body;
	const { value, error } =
		account === 'Parent' ? signUpParents(req.body) : signUpTeachers(req.body);
	if (error) return res.status(500).send('TIENES EL ERROR EN VERIFYDATA JOVEN');
	const { email } = value;
	if (
		await findUser({
			type: 'email',
			payload: { email, account: value.account },
		})
	)
		return res.status(404).send('Email already used');

	next();
};

const verifySignInData = async (req, res, next) => {
	const { error, value } = signIn(req.body);
	if (error) return res.status(500).send(error.details[0].message);

	const { email, password } = value;
	const user = await findUser({ type: 'email', payload: email });
	if (!user) return res.status(404).send('Email is wrong');

	if (!(await bcrypt.compare(password, user.password))) {
		return res.status(404).send('Password is wrong');
	}

	next();
};

const verifyChild = async (req, res, next) => {
	const { error, value } = addChild(req.body);
	if (!value) {
		return res.send('ERROR IN YOUR CHILD');
	}

	next();
};

module.exports = { verifySignUpData, verifySignInData, verifyChild };
