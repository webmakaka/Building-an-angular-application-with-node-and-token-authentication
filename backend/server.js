const express = require('express');
const cors = require('cors');
const app = express();

const posts = [
    {message: 'hello'},
    {message: 'hi'}
];

app.use(cors());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.listen(3000);