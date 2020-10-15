const mongoose = require("mongoose");

const schema = mongoose.Schema;
const ObjectId = require("mongoose").Types.ObjectId;
const lecture = new schema(
  {
    instructorID: { type: ObjectId, required: true },
    lecture_name: { type: String },
    subjectID: [{ type: String,required: true }],
    duration: { type: String, required: true },
    maxCapacityParticipants: {
      type: Number,
      default: "Unlimited",
      required: true,
    },
    // uploadDate:{type:Date,default:Date.now()},
    lectureDate: { type: Date, required: true },
    summery: { type: String, required: true },
    price: { type: Number, required: true },
    language: { type: String, required: true },
    rank: { type: String },
    recommended: { type: String },
    videos: { type: String, required: true },
    customersID: [{ type: ObjectId }],
  },
  {
    timestamps: true,
  }
);
lecture.virtual("customers", {
  ref: "customer",
  localField: "_id",
  foreignField: "lecture_id",
});
lecture.virtual("lectures", {
  ref: "lecture",
  localField: "_id",
  foreignField: "subjectID",
});

module.exports = mongoose.model("lecture", lecture);