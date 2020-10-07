const express = require('express');
const contactCtrl = require('../controllers/contactus_ctrl');

const router = express.Router();

router.post('/',contactCtrl.createContactus)


module.exports = router;