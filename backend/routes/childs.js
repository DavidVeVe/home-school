const router = require('express').Router();

const { Childs } = require('../database/');
const { verifyChild } = require('../utils/middlewares/verifyData');

router.post('/child', verifyChild, async (req, res) => {
	const child = req.body;
	const newChild = new Childs(child);
	const childSaved = await newChild.save();
	res.send(childSaved);
});

router.delete('/child', async (req, res) => {
	const { userId, parentId } = req.body;
	try {
		await Childs.findByIdAndDelete(userId);
		const users = await Childs.find({ parent: parentId });
		res.send(users);
	} catch (error) {
		res.send(error);
	}
});

router.post('/childs', async (req, res) => {
	const { id } = req.body;
	console.log(id);
	try {
		const childs = await Childs.find({ parent: id });
		res.send(childs);
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
