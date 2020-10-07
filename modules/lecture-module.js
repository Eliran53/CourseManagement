const mongoose = require("mongoose");
const schema = mongoose.Schema;
const lecture = new schema(
  {
    lectureName: { type: String, required: true },
    subjectID: { type: String, required: true, unique: true },
    duration: { type: String, required: true },
    maxCapacityParticipants: { type: Number, required: true },
    uploadDate: { type: Date, required: true },
    lectureDate: { type: Date, required: true },
    summery: { type: String, required: true },
    price: { type: Number, required: true },
    language: { type: String, required: true },
    rank: { type: String },
    recommended: { type: String, required: true },
    videos: { type: String, required: true },
    customerID: { type: String },
    instructor: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "instructors"
        }
      
  },
  { timestamps: true }
);
module.exports = mongoose.model("lecture", lecture);
