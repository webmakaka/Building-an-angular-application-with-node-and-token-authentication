const express = require('express');
const app = express();

const posts = [
    {message: 'hello'},
    {message: 'hi'}
];

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.listen(3000);