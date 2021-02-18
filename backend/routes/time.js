var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    epoch: Math.floor(Date.now() / 1000)
  });
});

module.exports = router;
