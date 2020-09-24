const express = require('express');
const SubjectCtrl = require('../controllers/role-ctrl');

const router = express.Router();

router.post('/',SubjectCtrl.createRole)
router.get('/',SubjectCtrl.getAllRoles)
router.put('/:id',SubjectCtrl.updateRole)
router.delete('/:id',SubjectCtrl.deleteRole)
router.get('/:id',SubjectCtrl.getRoleById)
module.exports = router;