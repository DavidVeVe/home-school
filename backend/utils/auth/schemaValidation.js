const Joi = require('@hapi/joi');

const signInValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string()
			.email({
				minDomainSegments: 2,
				tlds: { allow: ['com', 'net'] },
			})
			.required(),
		password: Joi.string()
			.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
			.required(),
	});

	return schema.validate(data);
};

const signUpTeachersValidation = (data) => {
	const schema = Joi.object({
		firstname: Joi.string().min(3).max(30).required(),
		lastname: Joi.string().min(3).max(30).required(),
		email: Joi.string().email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		}),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
		phone: Joi.number().min(10).required(),
		cct: Joi.number().min(10).required(),
		account: Joi.string().min(4).max(30).required(),
	});
	return schema.validate(data);
};

const signUpParentsValidation = (data) => {
	const schema = Joi.object({
		firstname: Joi.string().min(3).max(30).required(),
		lastname: Joi.string().min(3).max(30).required(),
		email: Joi.string().email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		}),
		password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
		phone: Joi.number().min(10).required(),
		account: Joi.string().min(4).max(30).required(),
	});

	return schema.validate(data);
};

const addChild = (data) => {
	const schema = Joi.object({
		firstname: Joi.string().min(3).max(30).required(),
		lastname: Joi.string().min(3).max(30).required(),
		age: Joi.number().min(1).required(),
		parent: Joi.string().min(4).max(30).required(),
		group: Joi.string().required(),
		assignmets: Joi.array().required(),
	});

	return schema.validate(data);
};

module.exports = {
	addChild,
	signUpTeachers: signUpTeachersValidation,
	signUpParents: signUpParentsValidation,
	signIn: signInValidation,
};
