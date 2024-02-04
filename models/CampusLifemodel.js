const mongoose = require('mongoose');

const campuslifeSchema = new mongoose.Schema({
    title1: {
        type: String,
    },
    Image: {
        type: String, 
    },
    subtitle1: {
        type: String,
        required: true,
    },
    paragraph1: {
        type: String,
        required: true,
    }
   
});

const Campus = mongoose.model('CampusLife', campuslifeSchema);

module.exports = Campus;
