var express = require('express');
var router = express.Router();

var john = {
  firstName: "John",
  lastName: "King",
  email: "john.king@yahoo.com"
};

var mike = {
  firstName: "Mike",
  lastName: "Reid",
  email: "mike.reid@msn.com"
}

var users = [john, mike];

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource, this is for the users page.');
  res.render('userlist', { title: 'User List', users });
});

module.exports = router;
