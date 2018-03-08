const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jwt-simple');
const app = express();

const User = require('./models/User.js');

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
    const userData = req.body;
    
    const user = new User(userData);

    user.save((err, result) =>{
        if(err){
            console.log('saving user error ' + err);
        }
        
        res.sendStatus(200);
    });
});

app.post('/login', async (req, res) => {
    const userData = req.body;
    
    const user = await User.findOne({
        email: userData.email
    });
    
    if(!user){
        return res.status(401).send({
            message: 'Email or Password invalid'
        });
    }
    
    if(userData.password != user.password){
        return res.status(401).send({
            message: 'Email or Password invalid'
        });
    }
    
    const payload = {};
    
    const token = jwt.encode(payload, '123')
    
    console.log(token);
    res.status(200).send({
        token
    });

});

mongoose.connect('mongodb://user:user1@ds255768.mlab.com:55768/building_angular_application_with_node_and_token_authentication', (err) => {
    if(err){
        console.log('error');
    }
    
    console.log('conected to mongo');
        
});

app.listen(3000);
