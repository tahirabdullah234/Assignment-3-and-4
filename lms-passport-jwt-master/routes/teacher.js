var express = require('express');
const submitassignment = require('../models/submitassignment');
var router = express.Router();

var submitassignment = require('../models/submitassignment');
var assignment = require('../models/assignment');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/viewAttemptedassignment',cors.cors, authenticate.verifyUser, function(req, res, next) {
  submitassignment.find().sort('name').exec(function(error, results) {
      if (error) {
          return next(error);
      }
      // Respond with valid data
      res.json(results);
  });
});

router.post('/addAssignment',cors.corsWithOptions, authenticate.verifyUser,authenticate.verifyAdmin, function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.designation);
    assignment.create(req.body)
        .then((teacher) => {
            console.log('Assignmnent has been Added ', teacher);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assignment);
        }, (err) => next(err))
        .catch((err) => next(err));
});
module.exports = router;
