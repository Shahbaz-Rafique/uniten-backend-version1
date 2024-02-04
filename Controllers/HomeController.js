const Home = require('../models/homevideomodel');
const Scholarship = require('../models/ScholarShipmodel');

const CampusLife=require('../models/CampusLifemodel');

const Graduates=require('../models/graduatemodel');
const Educators=require('../models/educatormodel');
const InternationalOffice=require('../models/internationalofficemodel');
const Partner=require('../models/partnermodel');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.edithomevideo = async (req, res) => {
    try {
        const { videoLink } = req.body;
        console.log('Coming in edit', videoLink);

        const existingHomeVideo = await Home.findOne();

        if (!existingHomeVideo) {
            // If no entry exists, create a new one with the provided video link
            const newHomeVideo = new Home({ videoLink });
            const savedHomeVideo = await newHomeVideo.save();

            return res.status(201).json({ message: 'Home video link added successfully', homeVideo: savedHomeVideo });
        }

        // If an entry exists, update the video link
        existingHomeVideo.videoLink = videoLink;
        const updatedHomeVideo = await existingHomeVideo.save();

        res.status(200).json({ message: 'Home video link updated successfully', homeVideo: updatedHomeVideo });
    } catch (error) {
        console.error('Error updating/adding home video link:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.Scholar = async (req, res) => {
    try {
        console.log(req.body.name);
        const { title, subtitle, paragraph,image } = req.body;


        const Image = req.file ? req.file.path : 'null';
        // console.log('this is the profile imaga',profileImage)
        console.log( subtitle, paragraph)

        if (!subtitle||!paragraph) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

      
            const Scholar = new Scholarship({
                title: title,
                subtitle: subtitle,
                paragraph: paragraph,
                Image

            });
            await Scholar.save();
            if (Scholar) {
                res.status(201).json({ message: 'Scholar Added Successfully' });
            }
    } catch (error) {
        console.log(error);

    }
};

exports.addcampuslife = async (req, res) => {
    try {
        console.log(req.body.name);
        const { title1, subtitle1, paragraph1,image1} = req.body;


        const Image = req.file ? req.file.path : 'null';
        // console.log('this is the profile imaga',profileImage1)
        console.log( subtitle1, paragraph1)

        if (!subtitle1||!paragraph1) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

      
            const CampusLife1 = new CampusLife({
                title1: title1,
                subtitle1: subtitle1,
                paragraph1: paragraph1,
                Image

            });
            await CampusLife1.save();
            if (CampusLife1) {
                res.status(201).json({ message: 'CampusLife Added Successfully' });
            }
    } catch (error) {
        console.log(error);

    }
};

exports.addgraduate = async (req, res) => {
    try {
        console.log(req.body.name);
        const { Quote, Description,image1} = req.body;


        const Image = req.file ? req.file.path : 'null';
        // console.log('this is the profile imaga',profileImage1)

        if (!Quote||!Description||!Image) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

      
            const Graduate = new Graduates({
                Quote: Quote,
                Description: Description,
                Image

            });
            await Graduate.save();
            if (Graduate) {
                res.status(201).json({ message: 'Graduate Added Successfully' });
            }
    } catch (error) {
        console.log(error);

    }
};

exports.addeducator = async (req, res) => {
    try {
        console.log(req.body.name);
        const { Quote, Description,image1} = req.body;


        const Image = req.file ? req.file.path : 'null';
        // console.log('this is the profile imaga',profileImage1)

        if (!Quote||!Description||!Image) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

      
            const Educator = new Educators({
                Quote: Quote,
                Description: Description,
                Image

            });
            await Educator.save();
            if (Educator) {
                res.status(201).json({ message: 'Educator Added Successfully' });
            }
    } catch (error) {
        console.log(error);

    }
};

exports.internationaloffice = async (req, res) => {
    try {
        const {title,description, videoLink } = req.body;
        console.log('Coming in edit', videoLink);

        const existingHomeVideo = await InternationalOffice.findOne();

        if (!existingHomeVideo) {
            const newHomeVideo = new InternationalOffice({ videoLink,title,description });
            const savedHomeVideo = await newHomeVideo.save();

            return res.status(201).json({ message: 'Home video link added successfully', homeVideo: savedHomeVideo });
        }

        existingHomeVideo.videoLink = videoLink;
        const updatedHomeVideo = await existingHomeVideo.save();

        res.status(200).json({ message: 'Home video link updated successfully', homeVideo: updatedHomeVideo });
    } catch (error) {
        console.error('Error updating/adding home video link:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


exports.addPartners = async (req, res) => {
    try {
        const { title, description } = req.body;
        const images = req.files.map(file => file.path);

        if (!title || !description || !images) {
            return res.status(422).json({ error: "Please fill all the fields" });
        }

        const partner = new Partner({
            title,
            description,
            images,
        });

        await partner.save();

        res.status(201).json({ message: 'Partners Added Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};