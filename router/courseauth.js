const express = require('express');
const router = express.Router();
const multer = require('multer');


const fs = require('fs');
const dir = './uploads';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const upload = multer({ storage: storage });
const courseController = require('../Controllers/CourseController');




router.post("/addcourse", upload.single('categoryImage'), courseController.addCourse);
router.get("/getCourses",courseController.getCourses);

module.exports = router;