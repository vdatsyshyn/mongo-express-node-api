const db = require('../models');

exports.getPosts = (req, res) => {
    db.Blog.find()
        .then(posts => {
            res.json(posts);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.createPost = (req, res) => {
    db.Blog.create(req.body)
        .then(newPost => {
            res.status(201).json(newPost);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPost = (req, res) => {
    db.Blog.findById(req.params.postId)
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.updatePost = (req, res) => {
    db.Blog.findOneAndUpdate({_id: req.params.postId}, req.body, {new: true})
        .then(post => {
            res.json(post);
        })
        .catch(err => {
            res.send(err);
        });
};

exports.deletePost = (req, res) => {
    db.Blog.remove({_id: req.params.postId})
        .then(() => {
            res.json({message: 'We deleted id!'});
        })
        .catch(err => {
            res.send(err);
        })
};

module.exports = exports;