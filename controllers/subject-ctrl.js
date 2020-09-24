const Subject = require("../modules/role-module");

createSubject = (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide Subject",
    });
  }

  const subject = new Subject(body);

  if (!subject) {
    return res.status(400).json({ success: false, error: err });
  }

  subject
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: subject._id,
        message: "subject created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "subject not created",
      });
    });
};

getAllSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find({}).exec();
    if (!subjects.length) {
      return res
        .status(404)
        .json({ success: false, error: "not a singal subject was found" });
    }

    return res.status(200).json({ success: true, data: subjects });
  } catch (error) {
    return res.status(400).json({ success: false, error: err });
  }
};

updateSubject = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const subject = await Subject.findOne({ _id: req.params.id }).exec();

    subject.subject_name = body.subject_name;

    role.save().then(() => {
      return res.status(200).json({
        success: true,
        id: subject._id,
        message: "subject updated",
      });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};

deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    if (!subject) {
      return res
        .status(404)
        .json({ success: false, error: "subject not found" });
    }
    return res.status(200).json({ success: true, data: subject });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: err });
  }
};

getSubjectById = async (req, res) => {
  try {
    const subject = await subject.findOne({ _id: req.params.id }).exec();
    if (!role) {
      return res
        .status(404)
        .json({ success: false, error: "subject not found" });
    }
    return res.status(200).json({ success: true, data: subject });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};

module.exports = {
  createSubject,
  getAllSubjects,
  getSubjectById,
  deleteSubject,
  updateSubject,
};
