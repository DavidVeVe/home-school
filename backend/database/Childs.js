const mongoose = require('mongoose');
const childsSchema = mongoose.Schema({
	firstname: { type: String, required: true },
	lastname: { type: String, required: true },
	age: { type: Number, required: true },
	parent: { type: String, required: true },
	group: { type: String },
	assignments: { type: Array },
});

module.exports = mongoose.model('Childs', childsSchema);
