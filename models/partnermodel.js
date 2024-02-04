const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [{
    type: String, // Assuming you store image URLs in the database
  }],
  description: {
    type: String,
    required: true,
  },
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
