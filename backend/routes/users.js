var express = require('express');
var router = express.Router();

let users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post('/', function(req, res, next) {
  users[users.length] = {'username': req.body.username, 'password': req.body.password}
  res.json(users);
});

module.exports = router;
