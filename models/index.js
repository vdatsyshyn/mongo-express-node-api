const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/blog-api', {useNewUrlParser: true});

mongoose.Promise = Promise;

module.exports.Blog = require('./blogPost');
