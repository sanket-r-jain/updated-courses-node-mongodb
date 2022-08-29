const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  documentType: { type: String, required: true },
  documentPath: { type: String, required: true },
})

const newCourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  document: {
    type: [documentSchema],
    default: undefined,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  modifiedAt: {
    type: Date,
    default: new Date()
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("newcourses", newCourseSchema);