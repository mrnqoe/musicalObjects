var math0s     = require('./Math.js');
var Playlist   = require('./plist.js');
var Library    = require('./lib.js');

module.exports = {
  Track: Track
}

var Track = function(id, title, artist, album, rating, duration){
  this.title    = title;
  this.artist   = artist;
  this.rating   = rating;
  this.duration = duration;
}
