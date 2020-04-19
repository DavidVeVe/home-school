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
			return (
				(await Teacher.findOne({ email: payload })) ||
				(await Parent.findOne({ email: payload }))
			);

		default:
			break;
	}
};

module.exports = {
	newUser,
	findUser,
};
