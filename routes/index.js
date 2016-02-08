var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Express', 
  	host: req.hostname, 
  	proto: req.protocol,
  	x_proto: req.headers["x-forwarded-proto"]
  });
});

module.exports = router;
