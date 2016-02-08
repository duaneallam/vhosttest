var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', host: req.hostname, headers: JSON.stringify(req.headers) });
});

module.exports = router;
