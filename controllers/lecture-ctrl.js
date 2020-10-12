const Lecture = require("../modules/lecture-module");
const subjects = require("../modules/subject-module");
var ObjectId = require("mongoose").Types.ObjectId;

const Instructor = require("./instructor-ctrl");
const bcrypt = require("bcryptjs");

createLecture = (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    console.log("body");

    return res.status(400).json({
      success: false,
      error: "you must provide lecture ",
    });
  }
  const lecture = new Lecture(body);
  if (!lecture) {
    console.log("lecture");
    return res.status(400).json({ success: false, error: err });
  }
  lecture
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: lecture._id,
        message: "lecture created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "lecture not created",
      });
    });
};

getAllLectures = async (req, res) => {
  await Lecture.find({}, (err, lecture) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!lecture.length) {
      return res
        .status(404)
        .json({ success: false, error: "not a lecture was found" });
    }
    return res.status(200).json({ success: true, data: lecture });
  })
    .populate("instructors")
    .exec()
    .catch((err) => console.log(err));
};

updateLecture = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  await Lecture.findOne({ _id: req.params.id }, (err, lecture) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "lecture not found",
      });
    }
    (lecture.instructorID = body.instructorID),
      console.log("lecture.instructorID", lecture.instructorID);

    (lecture.lectureName = body.lectureName),
      console.log("lecture.lectureName", lecture.lectureName);

    (lecture.subjectID = body.subjectID),
      console.log("lecture.subjectID", lecture.subjectID);

    (lecture.duration = body.duration),
      console.log("lecture.duration", lecture.duration);

    (lecture.maxCapacityParticipants = body.maxCapacityParticipants),
      console.log(
        "lecture.maxCapacityParticipants",
        lecture.maxCapacityParticipants
      );

    (lecture.uploadDate = body.uploadDate),
      console.log("lecture.uploadDate", lecture.uploadDate);

    (lecture.lectureDate = body.lectureDate),
      console.log("lecture.lectureDate:", lecture.lectureDate);

    (lecture.summery = body.summery),
      console.log("lecture.summery:", lecture.summery);

    (lecture.price = body.price), console.log("lecture.price", lecture.price);

    (lecture.language = body.language),
      console.log("lecture.language", lecture.language);

    (lecture.rank = body.rank), console.log("lecture.rank", lecture.rank);

    (lecture.recommended = body.recommended),
      console.log("lecture.recommended", lecture.recommended);

    (lecture.videos = body.videos),
      console.log("lecture.videos", lecture.videos);

    lecture.customerID = body.customerID;
    console.log("lecture.customerID", lecture.customerID);

    console.log("lecture:", lecture);

    lecture
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: lecture._id,
          message: "lecture updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "lecture not updated",
        });
      });
  });
};

deleteLecture = async (req, res) => {
  await Lecture.findOneAndDelete({ _id: req.params.id }, (err, lecture) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (lecture) {
      return res
        .status(404)
        .json({ success: false, error: "lecture not found" });
    }
    return res.status(200).json({ success: true, data: lecture });
  }).catch((err) => console.log(err));
};

getLectureById = async (req, res) => {
  try {
    const lecture = await Lecture.findOne({ _id: req.params.id }).exec();
    console.log("lecture:", lecture);
    if (!lecture) {
      return res
        .status(404)
        .json({ success: false, error: "lecture not found" });
    }
    return res.status(200).json({ success: true, data: lecture });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};

// getHomeLectures = async (req, res) => {
//   try {
//     let lecturesHome = [];
//     const subjectList = await subjects.find({}).select("id");
//     subjectList.forEach(async (sub) => {
//       console.log(sub.id);
//       const data = await Lecture.find({ subjectID: sub.id }).limit(3).exec();
//       console.log(data);
//       lecturesHome = [...data, ...lecturesHome];
//     });
//     return res.status(200).json({ success: true, data: lecturesHome });
//   } catch (error) {
//     console.error(error);
//     return res.status(400).json({ success: false, error: error });
//   }
// };

module.exports = {
  createLecture,
  getAllLectures,
  getLectureById,
  updateLecture,
  deleteLecture
};
