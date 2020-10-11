const express = require('express');
const lectureCtrl = require('../controllers/lecture-ctrl');

const router = express.Router();

router.post('/',lectureCtrl.createLecture)
router.get('/',lectureCtrl.getAllLectures)
<<<<<<< HEAD
router.get('/home',lectureCtrl.getHomeLectures)
router.put('/:id',lectureCtrl.getLectureById) 
router.delete('/:id',lectureCtrl.deleteLecture)
=======
>>>>>>> origin/queryUpdate
router.get('/:id',lectureCtrl.getLectureById)
router.put('/:id',lectureCtrl.updateLecture)
router.delete('/:id',lectureCtrl.deleteLecture)
// router.post('/instructorName',lectureCtrl.searchLecturesNameByInstructorId)

module.exports = router;