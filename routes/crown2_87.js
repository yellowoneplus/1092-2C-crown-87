var express = require('express');
var router = express.Router();

const categories = require('../data/categories');
const Category_87 = require('../controllers/crown2Controller_87');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown2_87', 
  { title: 'Hsingtai Chung 408410487 (static)' ,
    data: categories
  });
});

router.get('/homepage', Category_87.getHomepage);



module.exports = router;
