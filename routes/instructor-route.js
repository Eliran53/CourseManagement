const express = require('express');
const instructorCtrl = require('../controllers/instructor-ctrl');

const router = express.Router();

router.post('/',instructorCtrl.createInstructor)
router.get('/',instructorCtrl.getAllInstructors)
router.put('/:id',instructorCtrl.updateInstructor)
router.delete('/:id',instructorCtrl.deleteInstructor)
router.get('/:id',instructorCtrl.getInstructorById)
router.post('/login',instructorCtrl.checkAuthentication)
router.post('/aut',instructorCtrl.checkAuthorization)
module.exports = router;