var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    User.find({}, function(err, docs){
        res.render('index', {
            'users' : docs,
            'title' : 'Mongoose Tutorial'
        })
    });
});

module.exports = router;
