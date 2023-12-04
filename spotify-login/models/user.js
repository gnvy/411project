const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  spotifyId: String,
  displayName: String,
});

module.exports = mongoose.model('User', userSchema);