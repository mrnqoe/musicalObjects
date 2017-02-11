var math0s    = require('./Math.js');
var Library   = require('./lib.js');
var Track     = require('./tracks.js');

module.exports = {
  Playlist: Playlist
}

var Playlist = function(id, name){
  this.id                   = id
  this.name                 = name;
  this.tracks               = [];
  this.calcTotalDuration();
  this.calcOverallRating();
}

Playlist.prototype.addTrack = function(track){
  this.tracks.push(track);
  this.calcOverallRating();
  this.calcTotalDuration();
}

Playlist.prototype.calcOverallRating = function(){
  this.overallRating  = math0s.avg(this.tracks, "rating");
}

Playlist.prototype.calcTotalDuration = function(){
  this.totalDuration  = math0s.sum(this.tracks, "duration");
}
