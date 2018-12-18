const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const postsRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send('Root Route');
});

app.use('/api/posts', postsRoutes);

app.listen(3000, () => {
    console.log('App is running on port 3000...');
});