const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  name: String,
  heroes: Array
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
