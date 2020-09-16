const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [{
    id: 1,
    name: 'mulu',
  },
  {
    id: 2,
    name: 'davora',
  }];
  res.send(users);
});

module.exports = router;
