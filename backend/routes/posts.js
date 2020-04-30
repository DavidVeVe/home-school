const router = require('express').Router();
const { Post } = require('../database/');
router.post('/post', async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    const postSaved = await newPost.save();
    res.send(postSaved);

});
router.get('/post', async (req, res) => {
    // const post = req.body;
    // const newPost = new Posts(post);
    // const postSaved = await newPost.save();
    res.send("Hola");
});
router.get('/post/:postId', function (req, res) {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    res.send(req.params);
})


// tareas por materia 

module.exports = router;