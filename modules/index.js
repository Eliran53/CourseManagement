const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const rolesctrl = require('../controllers/role-ctrl')

const db = {};

db.mongoose = mongoose;

// db.user = require("./user.model");
db.role = require("./role-module");
db.instructor = require('./instructor-module')
db.customer = require('./customers-module')

// db.ROLES = rolesctrl.getAllRoles();

module.exports = db;