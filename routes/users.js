var express = require('express');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [{
    "id": 1,
    "name": "the king mulu"
  },
  {
    "id": 2,
    "name": "ravi"
  }];
  res.send(users);
});

module.exports = router;
