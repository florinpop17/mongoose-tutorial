var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/showUsers', function(req, res, next) {
    User.find({}, function(err, docs){
        res.render('showUsers', {
            'users' : docs,
            'sub_title' : 'Registered users:'
        });
    });
});

router.get('/', function(req, res) {
    console.log('hello!!!');
    res.render('index');
})

router.get('/addNewUser', function(req, res){
    res.render('addNewUser');
});

router.post('/addNewUser', function(req, res){
    var newUser = new User();
    console.log('...posting...');
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    
    newUser.save(function(err, user){
        if(err){
            console.log('Error:', err);
            res.send('Error: '+err);
        } else {
            console.log('Added succesfully');
            console.log(user);
            res.render('index');
        }
    })
});

module.exports = router;
