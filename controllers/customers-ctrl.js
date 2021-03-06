const Customer = require("../modules/customers-module");
const Lecture = require("../modules/lecture-module");
const bcrypt = require("bcryptjs");

createCustomer = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "you must provide customer",
    });
  }

  const customer = new Customer(body);

  if (!customer) {
    console.log("customer");

    return res.status(400).json({ success: false, error: err });
  }

  customer
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: customer._id,
        message: "customer created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "customer not created",
      });
    });
};
getAllCustomers = async (req, res) => {
  await Customer.find({}, (err, customers) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!customers.length) {
      return res
        .status(404)
        .json({ success: false, error: "customer not found" });
    }
    return res.status(200).json({ success: true, data: customers });
  }).catch((err) => console.log(err));
};
updateCustomer = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  await Customer.findOne({ _id: req.params.id }, (err, customer) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "customer not found",
      });
    }
    customer.first_name = body.first_name;
    customer.last_name = body.last_name;
    customer.email = body.email;
    (customer.password = body.password),
      (customer.role_id = body.role_id),
      (customer.lecture_id = body.lecture_id),
      (customer.payment = body.payment);

    customer
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: customer._id,
          message: "customer updated",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "customer not updated",
        });
      });
  });
};

deleteCustomer = async (req, res) => {
  await Customer.findOneAndDelete({ _id: req.params.id }, (err, customer) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, error: "customer not found" });
    }
    return res.status(200).json({ success: true, data: customer });
  }).catch((err) => console.log(err));
};

getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findOne({ _id: req.params.id }).exec();
    if (!customer) {
      return res
        .status(404)
        .json({ success: false, error: "customer not found" });
    }
    return customer.first_name;
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};
getLectureByCustomerId = async (req, res) => {
  try {
    const lectures = await Lecture.find({ customersID: req.params.id }).exec();
    if (!lectures) {
      return res
        .status(404)
        .json({ success: false, error: "lectures not found" });
    }
    // console.log(lectures);
    res.status(200).json({ data: lectures });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error: error });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
  getLectureByCustomerId,
};
