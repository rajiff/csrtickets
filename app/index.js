var express = require('express');
var router = express.Router();
var logger = require('../applogger');

router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;