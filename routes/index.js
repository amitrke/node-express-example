var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var myNumbers = [];
  for (var i=1; i<=100; i++) {
    myNumbers.push(i);
  }

  res.render('index', { title: 'Express', myNumbers });
});

module.exports = router;
