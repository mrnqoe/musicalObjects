const math0s    = require('./Math.js');
const uuidV4    = require('uuid/v4');
// var Playlist  = require('./plist.js');
// var Track     = require('./tracks.js');

// Music Library OBJ

var Library = function(id, name, creator){
  this.name       = name;
  this.creator    = creator;
  this.playlists  = [];
  this.tracks     = [];
}

Library.prototype.addPlaylist = function(name){
  var p = new Playlist(name)
  this.playlists.push(p);
  return p;
}

Library.prototype.addTrack = function(name, artist, album, rating, duration){
  var t = new Track(name, artist, album, rating, duration)
  this.tracks.push(t);
  return t;
}

Library.prototype.printPlaylist = function (property, value) {
  math0s.ittAndLog(this.playlists, property, value, (arresult)=>{
    console.log(arresult);
  })
}

Library.prototype.printTracks = function (property, value) {
  math0s.ittAndLog(this.tracks, property, value, (arresult)=>{
    console.log(arresult);
  })
}

Library.prototype.printSearchResults = function(query) {
  Object.keys(this).forEach((key)=>{
    var item = this[key];
    if(Array.isArray(item)){
      math0s.ittAndLog(item, 0, 'all', (i)=>{
        Object.keys(i).forEach((k)=>{
          // console.log(i[k].toString())
          if(i[k].toString().search(query) != -1){
            console.log(i);
          }
        })
      })
    }else{
      // console.log(item.toString())
      if(item.search(query) != -1){
        console.log(item);
      }
    }
  })
}

// Playlist OBJ

var Playlist = function(name){
  this.id                   = uuidV4();
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

// Track OBJ

var Track = function(title, artist, album, rating, duration){
  this.id       = uuidV4();
  this.title    = title;
  this.artist   = artist;
  this.rating   = rating;
  this.duration = duration;
}



// TEST FUNCTION CALLS

var myLib = new Library(01, 'My Libray', 'Mine');
var p001   = myLib.addPlaylist('MyPlayay');
var t0001  = myLib.addTrack('Detach', 'Hans Zimmer', 'Interstellar', 5, 702);
var t0002  = myLib.addTrack('Detach', 'Hans Zimmer', 'Interstellar', 5, 702);
var t0003  = myLib.addTrack('Detach', 'Hans Zimmer', 'Interstellar', 5, 702);
var t0004  = myLib.addTrack('Detach', 'Hans Zimmer', 'Interstellar', 5, 702);
var t0011  = myLib.addTrack('Detach', 'Hans Zimmer', 'Interstellar', 5, 702);
var t0041  = myLib.addTrack('Detach', 'Hans Zimmer', 'Interstellar', 5, 702);
p001.addTrack(t0001);
p001.addTrack(t0002);
p001.addTrack(t0003);
p001.addTrack(t0004);
p001.addTrack(t0011);
p001.addTrack(t0041);
// myLib.printPlaylist('all');
// myLib.printTracks('all');
myLib.printSearchResults('Hans');


// var arr = [{k: 5}, {k: 10}];
// var test = math0s.avg(arr, 'k');
// console.log(test);


// Planning on taking objects and arrays like this one
// and make it run through my code. Transformation helper function
// will probably be required.

// var library = {
//   tracks: { t01: { id: "t01",
//                    name: "Code Monkey",
//                    artist: "Jonathan Coulton",
//                    album: "Thing a Week Three" },
//             t02: { id: "t02",
//                    name: "Model View Controller",
//                    artist: "James Dempsey",
//                    album: "WWDC 2003"},
//             t03: { id: "t03",
//                    name: "Four Thirty-Three",
//                    artist: "John Cage",
//                    album: "Woodstock 1952"}
//           },
//   playlists: { p01: { id: "p01",
//                       name: "Coding Music",
//                       tracks: ["t01", "t02"]
//                     },
//                p02: { id: "p02",
//                       name: "Other Playlist",
//                       tracks: ["t03"]
//                     }
//              }
