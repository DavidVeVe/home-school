const { Parent, Teacher } = require('../../database/index');

const newUser = async (userData, hashedPassword) => {
	if (userData.account === 'Parent') {
		const parent = new Parent({
			...userData,
			password: hashedPassword,
		});
		return await parent.save();
	} else {
		const teacher = new Teacher({
			...userData,
			password: hashedPassword,
		});
		return await teacher.save();
	}
};

const findUser = async (data) => {
	const { type, payload } = data;
	switch (type) {
		case 'email':
			if (payload.account === 'Teacher') {
				return await Teacher.findOne({ email: payload.email });
			} else {
				return await Parent.findOne({ email: payload.email });
			}

		default:
			break;
	}
};

module.exports = {
	newUser,
	findUser,
};
