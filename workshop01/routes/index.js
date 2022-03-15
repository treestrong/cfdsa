var express = require('express');
var router = express.Router();
const stringArray = [
  	"There are 10 kinds of people. Those who knows binary and those who don\’t",
	"Logic will get you from A to B. Imagination will take you everywhere.",
	"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.",
	"It\’s not that I\’m so smart, it\’s just that I stay with problems longer",
	"It is pitch dark. You are likely to be eaten by a grue."
	]
var statement = stringArray[0];

/* GET home page. */
router.get('/', function(req, res, next) {

  statement = stringArray[Math.floor(Math.random()*5)];
  console.log(statement);

  res.render('index', { title: statement});
});
module.exports = router;
