const express = require('express');
const lectureCtrl = require('../controllers/lecture-ctrl');

const router = express.Router();

router.post('/',lectureCtrl.createLecture)
router.get('/',lectureCtrl.getAllLectures)
router.put('/:id',lectureCtrl.getLectureById)
router.delete('/:id',lectureCtrl.deleteLecture)
router.get('/:id',lectureCtrl.getLectureById)
module.exports = router;