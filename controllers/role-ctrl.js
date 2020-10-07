const Role = require("../modules/role-module");

createRole = (req, res) => {
  const body = req.body;
  console.log(body);
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide role",
    });
  }

  const role = new Role(body);

  if (!role) {
    return res.status(400).json({ success: false, error: err });
  }

  role
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: role._id,
        message: "role created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "role not created",
      });
    });
};

// getAllRoles = async (req, res) => {
//   try {
//     const roles = await Role.find({}).exec();
//     if (!roles.length) {
//       return res
//         .status(404)
//         .json({ success: false, error: "not a singal role was found" });
//     }
//     const jobs = [];
//     roles.forEach(element => {
//          jobs.push(element.role_name)
//      });
//      console.log(jobs);
//     return res.status(200).json({  data: jobs });
//   } catch (error) {
//     return res.status(400).json({ success: false, error: error });
//   }
// };

updateRole = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }
  try {
    const role = await Role.findOne({ _id: req.params.id }).exec();

    role.role_name = body.role_name;

    role.save().then(() => {
      return res.status(200).json({
        success: true,
        id: role._id,
        message: "role updated",
      });
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};

deleteRole = async (req, res) => {
  try {
    const role = await role.findOneAndDelete({ _id: req.params.id }).exec();
    if (!role) {
      return res.status(404).json({ success: false, error: "role not found" });
    }
    return res.status(200).json({ success: true, data: role });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error: err });
  }
};

getRoleNameById = async (id) => {
  try {
      console.log("rolectrl",id);
    const role = await Role.findOne({ _id: id }).exec();
    console.log("rolectrl");
    if (!role) {
      return res.status(404).json({ success: false, error: "role not found" });
    }
    return  role.role_name;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};

module.exports = {
  createRole,
//   getAllRoles,
  getRoleNameById,
  deleteRole,
  updateRole,
};
