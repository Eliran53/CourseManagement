const express = require('express');
const lectureCtrl = require('../controllers/lecture-ctrl');

const router = express.Router();

router.post('/lecture',lectureCtrl.createLecture)
router.get('/lectures',lectureCtrl.getAllLectures)
router.put('/lecture/:id',lectureCtrl.updateLecture)
router.delete('/lecture/:id',lectureCtrl.deleteLecture)
router.get('/lecture/:id',lectureCtrl.getLectureById)
module.exports = router;