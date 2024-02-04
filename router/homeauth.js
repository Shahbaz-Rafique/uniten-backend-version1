const express = require('express');
const router = express.Router();

const homeController = require('../Controllers/HomeController');
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

router.post("/edithomevideo", homeController.edithomevideo);


router.post("/addScholar", upload.single('Image'), homeController.Scholar);
router.post("/addcampuslife", upload.single('Image'), homeController.addcampuslife);
router.post("/addgraduate", upload.single('Image'), homeController.addgraduate);
router.post("/addeducator", upload.single('Image'), homeController.addeducator);

router.post("/internationaloffice", upload.single('Image'), homeController.internationaloffice);


router.post("/internationaloffice", upload.single('Image'), homeController.internationaloffice);
router.post('/addpartners', upload.array('images', 5), homeController.addPartners);











const Home = require('../models/homevideomodel');
const Scholarship = require('../models/ScholarShipmodel');
const CampusLife = require('../models/CampusLifemodel');
const Graduates = require('../models/graduatemodel');
const Educators = require('../models/educatormodel');
const InternationalOffice = require('../models/internationalofficemodel');
const Partner = require('../models/partnermodel');


// GET route to fetch home video details
router.get("/gethomevideo", async (req, res) => {
    try {
        const homeVideo = await Home.findOne();
        res.status(200).json({ homeVideo });
    } catch (error) {
        console.error('Error fetching home video:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to fetch scholarship details
router.get("/getScholar", async (req, res) => {
    try {
        const scholarship = await Scholarship.find();
        res.status(200).json({ scholarship });
    } catch (error) {
        console.error('Error fetching scholarship:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to fetch campus life details
router.get("/getcampuslife", async (req, res) => {
    try {
        const campusLife = await CampusLife.find();
        res.status(200).json({ campusLife });
    } catch (error) {
        console.error('Error fetching campus life details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to fetch graduate details
router.get("/getgraduate", async (req, res) => {
    try {
        const graduates = await Graduates.find();
        res.status(200).json({ graduates });
    } catch (error) {
        console.error('Error fetching graduate details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to fetch educator details
router.get("/geteducator", async (req, res) => {
    try {
        const educators = await Educators.find();
        res.status(200).json({ educators });
    } catch (error) {
        console.error('Error fetching educator details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to fetch international office details
router.get("/getinternationaloffice", async (req, res) => {
    try {
        const internationalOffice = await InternationalOffice.findOne();
        res.status(200).json({ internationalOffice });
    } catch (error) {
        console.error('Error fetching international office details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET route to fetch partner details
router.get("/getpartners", async (req, res) => {
    try {
        const partners = await Partner.find();
        res.status(200).json({ partners });
    } catch (error) {
        console.error('Error fetching partner details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
