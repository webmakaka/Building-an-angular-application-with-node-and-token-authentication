const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const posts = [
    {message: 'hello'},
    {message: 'hi'}
];

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/register', (req, res) => {
    console.log(userData.email);
    res.sendStatus(200);
});

app.listen(3000);
