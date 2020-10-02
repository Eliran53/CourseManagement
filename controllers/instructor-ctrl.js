const Instructor = require("../modules/instructor-module");
const bcrypt = require("bcryptjs");
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
    const instructor = await Instructor.findOneAndDelete({
      _id: req.params.id,
    }).exec();
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

getInstructorFullNameById = async (req, res) => {
  try {
    const instructor = await Instructor.findOne({ _id: req.params.id }).exec();
    if (!instructor) {
      return res
        .status(404)
        .json({ success: false, error: "instructor not found" });
    }
    return res
      .status(200)
      .json({
        success: true,
        data: instructor.first_name + instructor.last_name,
      });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};
checkAuthentication = async (req, res) => {
  // Search for a user by email 
  const user = await Instructor.findOne({ email: req.body.email }).exec();
  if (!user) {
    // throw new Error({ error: "Invalid login credentials" });
    return res.status(400).json({ success: false, error: "Invalid login credentials" });
  }
  const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordMatch) {
    // throw new Error({ error: "Invalid login credentials" });
    return res.status(400).json({ success: false, error: "Invalid login credentials" });
  }
  return res.status(200).json({ success: true, data: user });
};
RoleNameById = async (id) => {
    try {
      const role = await Role.findOne({ _id: id }).exec();
      if (!role) {
        return res.status(404).json({ success: false, error: "role not found" });
      }
      return role.role_name;
    } catch (error) {
      console.error(error);
      return res.status(400).json({ success: false, error: error });
    }
  };
checkAuthorization = async (id)=>{
    try {
        const instructor = await Instructor.findOne({ _id: id }).exec();
        if (!instructor) {
          return res
            .status(404)
            .json({ success: false, error: "instructor not found" });
        }
       const role= getRoleNameById(instructor.role_id);
        return res.status(200).json({ success: true, data: role });
      } catch (error) {
        console.error(error);
        return res.status(400).json({ success: false, error: error });
      }
}
// searchInstructorIdByInstructorName = async (first_name) =>{
//   try {
//     const instructor = await Instructor.find({first_name: req.body.first_name}).exec();
//      console.log("instructor",instructor)
    
//        if (!instructor ) {
//         return res
//             .status(404)
//             .json({ success: false, error: "instructor not found" });
//     }
//     console.log("instructor.id",instructor.id)
   
//     return instructor;
// } catch (error) {
//     console.error(error);
//     return res.status(400).json({ success: false, error: error });
// } 
// }; 

module.exports = {
  createInstructor,
  getAllInstructors,
  getInstructorById,
  deleteInstructor,
  updateInstructor,
  checkAuthentication,
  checkAuthorization,
  
};
