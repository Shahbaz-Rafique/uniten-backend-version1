// models/HomeVideo.js
const mongoose = require('mongoose');

const homeVideoSchema = new mongoose.Schema({
  videoLink: {
    type: String,
    required: true,
  },
});


const HomeVideo = mongoose.model('HomeVideo', homeVideoSchema);
module.exports = HomeVideo;
