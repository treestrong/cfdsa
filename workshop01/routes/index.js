var express = require('express');
var router = express.Router();
const stringArray = ["abc","xyz"]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: stringArray[0]});
});

module.exports = router;
