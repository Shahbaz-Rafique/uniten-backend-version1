const mongoose = require('mongoose');

const graduateSchema = new mongoose.Schema({
    Quote: {
        type: String,
    },
    Image: {
        type: String, 
    },
    Description: {
        type: String,
        required: true,
    }
   
});

const Graduate = mongoose.model('Graduates', graduateSchema);

module.exports = Graduate;
