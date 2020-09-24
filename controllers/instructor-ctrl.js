const Instructor = require("../modules/instructor-module");
createInstructor = (req, res) => {
  const body = req.body;
  if (!body) {

    return res.status(400).json({
      success: false,
      error: "you must provide instructor",
    });
  }

  const instructor = new Instructor(body);

  if (!instructor) {

    return res.status(400).json({ success: false, error: err });
  }

  instructor
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: instructor._id,
        message: "instructor created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "instructor not created",
      });
    });
};

getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find({}).exec();
    if (!instructors.length) {
      return res
        .status(404)
        .json({ success: false, error: "not a singal instructor was found" });
    }

    return res.status(200).json({ success: true, data: instructors });
  } catch (error) {
    return res.status(400).json({ success: false, error: err });
  }
};

updateInstructor = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const instructor = await Instructor.findOne({ _id: req.params.id }).exec();

    instructor.first_name = body.first_name;
    instructor.last_name = body.last_name;
    instructor.phone = body.phone;
    instructor.password = body.password;
    instructor.email = body.email;
    instructor.subject_id = body.subject_id;
    instructor.role_id = body.role_id;
    instructor.education = body.education;
    instructor.linkdin = body.linkdin;
    instructor.bio = body.bio;

    instructor.save().then(() => {
      return res.status(200).json({
        success: true,
        id: instructor._id,
        message: "instructor updated",
      });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};

deleteInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.findOneAndDelete({_id: req.params.id}).exec();
    if (!instructor) {
      return res
        .status(404)
        .json({ success: false, error: "instructor not found" });
    }
    return res.status(200).json({ success: true, data: instructor });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: err });
  }
};

getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findOne({ _id: req.params.id }).exec();
    if (!instructor) {
      return res
        .status(404)
        .json({ success: false, error: "instructor not found" });
    }
    return res.status(200).json({ success: true, data: instructor });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  deleteInstructor,
  updateInstructor,
};
