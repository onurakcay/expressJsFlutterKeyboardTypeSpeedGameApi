var express = require('express');
var router = express.Router();

const users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users.sort((user1,user2) =>
    Number(user1.score) <= Number(user2.score)).slice(0, 10));
  });


router.post('/score', function(req, res, next) {
  const {score,userName} = req.body;
  users.push({score, userName});
  res.send({success: true});
});

module.exports = router;
