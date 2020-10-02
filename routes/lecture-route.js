const express = require('express');
const lectureCtrl = require('../controllers/lecture-ctrl');

const router = express.Router();

router.post('/',lectureCtrl.createLecture)
router.get('/',lectureCtrl.getAllLectures)
router.get('/:id',lectureCtrl.getLectureById)
router.put('/:id',lectureCtrl.updateLecture)
router.delete('/:id',lectureCtrl.deleteLecture)
// router.post('/instructorName',lectureCtrl.searchLecturesNameByInstructorId)

module.exports = router;