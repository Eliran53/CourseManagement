const Instructor = require("../modules/instructor-module");
createInstructor = (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    console.log("body");

    return res.status(400).json({
      success: false,
      error: "you must provide instructor",
    });
  }

  const instructor = new Instructor(body);

  if (!instructor) {
    console.log("instructor");

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
  await Instructor.find({}, (err, instructors) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!instructors.length) {
      return res
        .status(404)
        .json({ success: false, error: "not a singal instructor was found" });
    }
    return res.status(200).json({ success: true, data: instructors });
  }).catch((err) => console.log(err));
};

updateInstructor = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  await Instructor.findOne({ _id: req.params.id }, (err, instructor) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "instructor not found",
      });
    }
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

    instructor
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: instructor._id,
          message: "instructor updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "instructor not updated",
        });
      });
  });
};

deleteInstructor = async (req, res) => {
  await Instructor.findOneAndDelete(
    { _id: req.params.id },
    (err, instructor) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!instructor) {
        return res
          .status(404)
          .json({ success: false, error: "instructor not found" });
      }
      return res.status(200).json({ success: true, data: instructor });
    }
  ).catch((err) => console.log(err));
};

getInstructorById = async (req, res) => {
  try {
    const instructor = await Instructor.findOne({ _id: req.params.id }).exec();
    //   if (err) {
    //     return res.status(400).json({ success: false, error: err });
    //   }
    // throw new Error("test111");
    if (!instructor) {
      return res
        .status(404)
        .json({ success: false, error: "instructor not found" });
    }
    return res.status(200).json({ success: true, data: instructor });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error:error });
  }
};

module.exports = {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  deleteInstructor,
  updateInstructor,
};
