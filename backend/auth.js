const User = require('./models/User.js');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
        const userData = req.body;
        const user = new User(userData);
        user.save((err, result) =>{
            if(err){
                console.log('saving user error ' + err);
            }
            
            res.sendStatus(200);
        });
});
    
router.post('/login', async (req, res) => {
        const loginData = req.body;
        const user = await User.findOne({
            email: loginData.email
        });
        
        if(!user){ 
            return res.status(401).send({
                message: 'Email or Password invalid'
            });
        }
        
        bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
            
            if(!isMatch){
                return res.status(401).send({
                    message: 'Email or Password invalid'
                });
            }
            
            const payload = {};
            
            const token = jwt.encode(payload, '123');
            
            res.status(200).send({
                token
            });
            
        });
});


module.exports = router;
