const router = require('express').Router();
const { Post } = require('../database/');


//search post by groupID and teacheID, sorted most recent first
router.get('/post/:groupID/:teacherID', function (req, res) {
    const groupID = req.params.groupID;
    const teacherID = req.params.teacherID;
    Post.
        find().
        where('teacherId').equals(teacherID).
        where('groupId').equals(groupID).
        sort({ dueDate: -1 }).
        select('title description dueDate assignmentId').
        exec(function (err, posts) {
            if (err) return handleError(err);
            res.send(posts);
        });
});

//add a new post
router.post('/post', async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    const postSaved = await newPost.save();
    res.send(postSaved);

});
module.exports = router;