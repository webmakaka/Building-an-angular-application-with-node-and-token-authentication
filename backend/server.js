const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const jwt = require('jwt-simple');

const User = require('./models/User.js');
const Post = require('./models/Post.js');
const auth = require('./auth.js');


mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

app.get('/posts/:id', async (req, res) => {
    const author = req.params.id;
    const posts = await Post.find({author});
    res.send(posts);
});

app.post('/post', auth.checkAuthenticated, (req, res) => {
    
    const postData = req.body;
    postData.author = req.userId;
    const post = new Post(postData);
    
    post.save((err, result) =>{
        if(err){
            console.error('saving post error ' + err);
            return res.status(500).send({
                message: 'saving post error'
            });
        }
        
        res.sendStatus(200);
    });
});

app.get('/users', async (req, res) => {
    
    try {
        const users = await User.find({}, '-password -__v');
        res.send(users);
    } catch (error){
        console.error(error);
        res.sendStatus(500);
    }
});


app.get('/profile/:id', async (req, res) => {
    
    try {
        const user = await User.findById(req.params.id, '-password -__v');        
        res.send(user);
    } catch (error){
        console.error(error);
        res.sendStatus(500);
    }    
});

mongoose.connect('mongodb://user:user1@ds255768.mlab.com:55768/building_angular_application_with_node_and_token_authentication', (err) => {
    if(err){
        console.log('error');
    }
    
    console.log('conected to mongo');
        
});

app.use('/auth', auth.router);

app.listen(3000);
