const mongoose = require("mongoose");
const schema = mongoose.Schema;

<<<<<<< HEAD
const role = new schema({
  role_name: { type: String, required: true },
});
=======
const role = new schema(
    {
        role_name:{type:String,required:true},

    }
    )
    role.virtual('roleCustomer', {
        ref: 'customer', 
        localField: '_id', 
        foreignField: 'role_id:', 
      
       
    });
    role.virtual('rolesInstructor', {
        ref: 'instructor', 
        localField: '_id', 
        foreignField: 'role_id:', 
      
       
    });

    module.exports = mongoose.model('roles',role)
>>>>>>> origin/queryUpdate

module.exports = mongoose.model("roles", role);
