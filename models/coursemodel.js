const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryImage:{
    type: String
  },
  aboutCourse: {
    type: String,
    required: true,
  },
  relatedCourses: {
    type: [String],
    default: [],
  },
  whatYouLearn: {
    type: [String],
    default: [],
  },
  entryRequirements: {
    type: [String],
    default: [],
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
