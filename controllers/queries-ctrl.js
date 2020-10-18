const Lecture = require("../modules/lecture-module");
const Customer = require("../modules/customers-module");
const Instructor = require("../modules/instructor-module");
const Subject = require("../modules/subject-module");
const Role = require("../modules/role-module");

searchLecturesByInstructorID = async (req,res) => {
  try{
     console.log("first name:",req.params.id);
     const instructor = await Instructor. findOne({ _id: req.params.id}).
     populate('lectures').exec();
     console.log("instructor",instructor);
     console.log("lectures",instructor.lectures);
     if (instructor.lectures.length === 0) {
        return res
            .status(404)
            .json({ success: false, error: "lectures not found" });
    }
    return res.status(200).json({ data:instructor.lectures});
  } catch (error) {
     console.error(error);
     return res.status(400).json({ success: false, error: error });
 }


};

searchLectureIdByLectureName = async (req, res) => {
  try {
    const lecture = await Lecture.findOne({
      lecture_name: req.body.lecture_name,
    }).exec();
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
searchLecturesByDate = async (req, res) => {
  try {
    const lecture = await Lecture.findOne({
      lectureDate: req.body.lectureDate,
    }).exec();
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
searchLecturesByCategories = async (req, res) => {
  try {
    console.log("subject_name:", req.body.subject_name);
    const category = await Subject.findOne({
      subject_name: req.body.subject_name,
    })
      .populate("lectures")
      .exec();
    console.log("category:", category);
    console.log("lectures:", category.lectures);
    if (category.lectures.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "lectures not found" });
    }
    return res.status(200).json({ data: category.lectures });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};
searchCustomersByLectureName = async (req, res) => {
  try {
    console.log("lecture name:", req.body.lecture_name);
    const lecture = await Lecture.findOne({
      lecture_name: req.body.lecture_name,
    })
      .populate("customers")
      .exec();
    console.log("lecture:", lecture);
    console.log("customers:", lecture.customers);
    if (lecture.customers.length == !0) {
      return res
        .status(404)
        .json({ success: false, error: "customers not found" });
    }
    return res.status(200).json({ data: lecture.customers });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};


 searchLecturesByInstructorID = async (req,res) => {
    try{
       console.log("first name:",req.params.id);
       const instructor = await Instructor. findOne({ _id: req.params.id}).
       populate('lectures').exec();
       console.log("instructor",instructor);
       console.log("lectures",instructor.lectures);
       if (instructor.lectures.length === 0) {
          return res
              .status(404)
              .json({ success: false, error: "lectures not found" });
      }
      return res.status(200).json({ data:instructor.lectures});
    } catch (error) {
       console.error(error);
       return res.status(400).json({ success: false, error: error });
   }

  };

searchLecturesByInstructorName = async (req, res) => {
  try {
    console.log("first name:", req.body.first_name);
    const instructor = await Instructor.findOne({
      first_name: req.body.first_name,
    })
      .populate("lectures")
      .exec();
    console.log("instructor", instructor);
    console.log("lectures", instructor.lectures);
    if (instructor.lectures.length === 0) {
      return res
        .status(404)
        .json({ success: false, error: "lectures not found" });
    }
    return res.status(200).json({ data: instructor.lectures });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }

};
//  searchCustomersByRoleName = async(req,res) => {
//     try{
//         console.log("role_name:",req.body.role_name);
//         const role = await Role.findOne({role_name: req.body.role_name}).
//         populate('roleCustomer').exec();
//         console.log("role:",role );
//         console.log("customers:",role.customers);
//         if (!role.customers) {
//            return res
//                .status(404)
//                .json({ success: false, error: "customers not found" });
//        }
//        return res.status(200).json({data:role.customers});
//      } catch (error) {
//         console.error(error);
//         return res.status(400).json({ success: false, error: error });
//     }
//  }

 

      






module.exports = {
  searchLectureIdByLectureName,
  searchLecturesByInstructorName,
  searchLecturesByCategories,
  searchCustomersByLectureName,
  searchLecturesByDate,
  searchLecturesByInstructorID
};

