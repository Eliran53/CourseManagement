const express = require('express');
const RoleCtrl = require('../controllers/role-ctrl');

const router = express.Router();

router.post('/',RoleCtrl.createRole)
// router.get('/',RoleCtrl.getAllRoles)
router.put('/:id',RoleCtrl.updateRole)
router.delete('/:id',RoleCtrl.deleteRole)
router.get('/:id',RoleCtrl.getRoleNameById)
module.exports = router;