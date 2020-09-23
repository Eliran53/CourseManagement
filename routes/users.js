const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const users = [{
    id: 1,
    name: 'mulualm',
  },
  {
    id: 2,
    name: 'ravi',
  },
  {
    id: 3,
    name: 'eliran',
  }];
  res.send(users);
});

module.exports = router;
