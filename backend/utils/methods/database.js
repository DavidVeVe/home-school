const User = require('../../database/authSchema');

const newUser = async (userData, hashedPassword) => {
	const { fullname, email, phone, state, country, account } = userData;
	const user = new User({
		fullname,
		email,
		password: hashedPassword,
		phone,
		state,
		country,
		account,
	});
	await user.save();
};

const findUser = async (data) => {
	const { type, payload } = data;
	switch (type) {
		case 'email':
			return await User.findOne({ email: payload });
		default:
			break;
	}
};

module.exports = {
	newUser,
	findUser,
};
