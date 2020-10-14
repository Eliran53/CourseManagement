const express = require('express');
const lectureCtrl = require('../controllers/lecture-ctrl');

const router = express.Router();

router.post('/',lectureCtrl.createLecture)
router.get('/',lectureCtrl.getAllLectures)
// router.get('/lec',lectureCtrl)


// router.get('/home',lectureCtrl.getHomeLectures)
router.put('/:id',lectureCtrl.getLectureById) 
router.delete('/:id',lectureCtrl.deleteLecture)

router.get('/:id',lectureCtrl.getLectureById)
router.put('/:id',lectureCtrl.updateLecture)
router.delete('/:id',lectureCtrl.deleteLecture)
// router.post('/instructorName',lectureCtrl.searchLecturesNameByInstructorId)

module.exports = router;