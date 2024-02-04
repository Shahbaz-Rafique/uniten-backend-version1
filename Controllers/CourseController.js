const Course = require('../models/courseModel');

exports.addCourse = async (req, res) => {
  try {
    const { courseName, category, aboutCourse, relatedCourses, whatYouLearn, entryRequirements } = req.body;

    // Handle the file upload
    const categoryImage = req.file ? req.file.path : null;
console.log( courseName,
  category,
  aboutCourse,
  relatedCourses,
  whatYouLearn,
  entryRequirements,
  categoryImage)
    const newCourse = new Course({
      courseName,
      category,
      aboutCourse,
      relatedCourses,
      whatYouLearn,
      entryRequirements,
      categoryImage,
    });

    await newCourse.save();

    res.status(201).json({ message: "Course created successfully", course: newCourse });
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.getCourses = async (req, res) => {
  try {
const courses=await Course.find({});    
    if (courses) {
      res.status(200).json({ courses });
    } else {
      res.json({ message: "No courses found" });
    }
  } catch (error) {
    console.error("Error getting courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};