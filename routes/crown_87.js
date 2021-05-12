var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_87', { title: 'Hsingtai Chung 408410487' });
});

module.exports = router;
