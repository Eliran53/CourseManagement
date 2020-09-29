const Lecture = require("../modules/lecture-module");
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
    }).catch((err) => console.log(err));
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
        lecture.instructorID = body.lecture,
        lecture.lectureName = body.lecture,
        lecture.subjectID = body.subjectID,
        lecture.duration = body.duration,
        lecture.maxCapacityParticipants = body.maxCapacityParticipants,
        lecture.uploadDate = body.uploadDate,
        lecture.lectureDate = body.lectureDate,
        lecture.summery = body.summery,
        lecture.price = body.price,
        lecture.language = body.language,
        lecture.rank = body.rank,
        lecture.recommended = body.recommended,
        lecture.videos = body.videos,
        lecture.customerID = body.customerID

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
    await Lecture.findOneAndDelete(
        { _id: req.params.id },
        (err, lecture) => {
            if (err) {
                return res.status(400).json({ success: false, error: err });
            }
            if (lecture) {
                return res
                    .status(404)
                    .json({ success: false, error: "lecture not found" });
            }
            return res.status(200).json({ success: true, data: lecture});
        }
    ).catch((err) => console.log(err));
};

getLectureById = async (req, res) => {
    try {
        const lecture = await Lecture.findOne({ _id: req.params.id }).exec();
       if (!lecture) {
            return res
                .status(404)
                .json({ success: false, error: "lecture not found" });
        }
        return res.status(200).json({ success: true, data:lecture});
    } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error });
    }
};

module.exports = {
    createLecture,
    getAllLectures,
    getLectureById,
    deleteLecture ,
    updateLecture 
};
