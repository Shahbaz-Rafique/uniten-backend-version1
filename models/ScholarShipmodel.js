const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    Image: {
        type: String, 
    },
    subtitle: {
        type: String,
        required: true,
    },
    paragraph: {
        type: String,
        required: true,
    },
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
