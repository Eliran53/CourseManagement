const Lecture = require("../modules/lecture-module");
const Customer = require("../modules/customers-module");
const Instructor = require("./instructor-ctrl");
const Subject = require("../modules/subject-module");
//to do:
//1. search lectures by lectures name
//2. search customers by lecture name
//3. search for lectures by categories (subjects)
//4. search lectures by date 
searchLectureIdByLectureName = async (req,res) => {
    try {
        console.log("test");
        const lecture = await Lecture.find({ lectureName: req.body.lectureName}).exec();
        // console.log("lecture",lecture)
        
           if (!lecture ) {
            return res
                .status(404)
                .json({ success: false, error: "lecture not found" });
        }
        return lecture._id;
    } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error });
    } 
};
searchCustomersByLectureId = async (req, res) => {
    try {
        const lectureId = await Lecture.searchLectureIdByLectureName(req, res);
        const customers = await Customer.find({ lectureId: lectureId }).exec();
        console.log("customer", customers);
        if (!customers) {
            return res
                .status(404)
                .json({ success: false, error: "customers not found" });
        }
        return res.status(200).json({ success: true, data: customers });

    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error });
    }
};
searchInstructorIdByInstructorName = async (first_name) =>{
    try {
      const instructor = await Instructor.find({first_name: req.body.first_name}).exec();
       console.log("instructor",instructor)
      
         if (!instructor ) {
          return res
              .status(404)
              .json({ success: false, error: "instructor not found" });
      }
      console.log("instructor.id",instructor.id)
     
      return instructor;
  } catch (error) {
      console.error(error);
      return res.status(400).json({ success: false, error: error });
  } 
  };
searchLecturesNameByInstructorId = async (req,res) => { 
    try {
        const instructorID = await Instructor.searchInstructorIdByInstructorName( req.body.first_name)
        const lecture = await Lecture.find({instructorID : instructorID._id}).exec();
        console.log("instructorID",instructorID)
        console.log("lecture", lecture);
        if (!lecture) {
            return res
                .status(404)
                .json({ success: false, error: "lecture not found" });
        }
        console.log(lecture.lectureName,"lectureName")
        return res.status(200).json({ success: true, data: lecture.lectureName});

    }
    catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error });
    }
};

module.exports = {
    searchCustomersByLectureId,
    searchLecturesNameByInstructorId

};