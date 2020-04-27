const mongoose = require('mongoose');
const groupSchema = mongoose.Schema({
	group: { type: String, required: true },
	assignments: { type: Array, required: true },
	students: { type: Array, required: true },
	teachers: { type: Array, required: true },
	id_invite: { type: String, required: true },
	tasks: { type: Array, required: true },
});

module.exports = mongoose.model('groups', groupSchema);
