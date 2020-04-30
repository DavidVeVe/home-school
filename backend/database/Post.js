const mongoose = require('mongoose');
const postsSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    teacherId: { type: String, required: true },
    groupId: { type: String, required: true },
    assignmentId: { type: String, required: true },
});

module.exports = mongoose.model('Post', postsSchema);