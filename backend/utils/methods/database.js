const User = require('../../database/authSchema');

const newUser = async (userData, hashedPassword) => {
	const user = new User({
		...userData,
		password: hashedPassword,
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
