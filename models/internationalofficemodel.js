// models/InternationalOffice.js
const mongoose = require('mongoose');

const InternationalOfficeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },

    videoLink: {
        type: String,
        required: true,
    },
});


const InternationalOffice = mongoose.model('InternationalOffice', InternationalOfficeSchema);
module.exports = InternationalOffice;
