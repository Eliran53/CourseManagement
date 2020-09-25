const express = require('express');
const customerCtrl = require('../controllers/customers-ctrl');

const router = express.Router();

router.post('/',customerCtrl.createCustomer)
router.get('/',customerCtrl.getAllCustomers)
router.put('/:id',customerCtrl.updateCustomer)
router.delete('/:id',customerCtrl.deleteCustomer)
router.get('/:id',customerCtrl.getCustomerById)
module.exports = router;