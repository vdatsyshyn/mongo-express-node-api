const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require('../helpers/posts');

router.route('/')
    .get(helpers.getPosts)
    .post(helpers.createPost);

router.route('/:postId')
    .get(helpers.getPost)
    .put(helpers.updatePost)
    .delete(helpers.deletePost);

module.exports = router;
