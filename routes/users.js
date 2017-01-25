var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/showUsers', function(req, res, next) {
    User.find({}, function(err, docs){
        res.render('showUsers', {
            'users' : docs,
            'sub_title' : 'Registered users:'
        })
    });
});

router.get('/', function(req, res) {
    res.render('index', {
        title: 'Mongoose tutorial'
    });
})

module.exports = router;
