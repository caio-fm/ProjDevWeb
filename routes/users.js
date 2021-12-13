const { useColors } = require('debug/src/browser');
var express = require('express');
var router = express.Router();

let users = []
let id = 1

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.jsonp(users);
});

//adicionado
router.post('/', function(req, res, next) {
  console.log(req.body)
  users.push({'id': id, 'user': req.body.user})
  res.json(users)
  console.log(users)
  id++
});

module.exports = router;
