const router = require('express').Router();
const { Group, Childs } = require('../database/');

router.post('/group', async (req, res) => {
	const { groupId, childId } = req.body;
	try {
		const group = JSON.stringify(await Group.findOne({ id_invite: groupId }));
		const parsedGroup = JSON.parse(group);
		const { _id } = parsedGroup;
		await Group.findByIdAndUpdate(_id, {
			$set: { students: [...parsedGroup.students, childId] },
		});
		let child = null;
		if (group) {
			child = await Childs.findByIdAndUpdate(childId, {
				$set: {
					group: groupId,
					assignments: parsedGroup.assignments.map((assignment) => ({
						[assignment]: {
							total: 90,
							entregadas: 12,
							pendientes: 1,
							noEntregadas: 2,
							profesor: parsedGroup.teacher,
						},
					})),
				},
			});
		}
		res.send(child);
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
