const mongoose = require('mongoose');

const educatorSchema = new mongoose.Schema({
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

const educator = mongoose.model('educators', educatorSchema);

module.exports = educator;
