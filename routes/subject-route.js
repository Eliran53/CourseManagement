const express = require('express');
const SubjectCtrl = require('../controllers/subject-ctrl');

const router = express.Router();

router.post('/',SubjectCtrl.createSubject)
router.get('/',SubjectCtrl.getAllSubjects)
router.put('/:id',SubjectCtrl.updateSubject)
router.delete('/:id',SubjectCtrl.deleteSubject)
router.get('/:id',SubjectCtrl.getSubjectNameById)
module.exports = router;