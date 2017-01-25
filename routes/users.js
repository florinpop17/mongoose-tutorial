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
    res.render('index';
})

router.get('/addNewUser', function(req, res){
    res.render('addNewUser');
});

router.post('/addNewUser', function(req, res){
    var newUser = new User();
    
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    
    newUser.save(function(err, user){
        if(err){
            res.send('Error: '+err);
        } else {
            res.render('addNewUser');
        }
    })
});

module.exports = router;
