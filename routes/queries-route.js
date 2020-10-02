const express = require('express');
const queriesCtrl = require('../controllers/queries-ctrl');
const router = express.Router();

router.post('/instructorName', queriesCtrl.searchLecturesNameByInstructorId)
router.post('/lectureName',queriesCtrl.searchCustomersByLectureId)


module.exports = router;