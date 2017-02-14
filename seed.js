// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var albumList =[];
albumList.push({
              artistName: 'Solange Knowles',
              name: 'A Seat At The Table',
              releaseDate: '2016, September 30',
              genres: [ 'funk', 'psychedelic soul', 'neo soul', 'R&B' ]
            });
albumList.push({
              artistName: 'A Tribe Called Quest',
              name: 'We got it from Here...Thank You 4 Your service',
              releaseDate: '2016, November 11',
              genres: [ 'hip hop', 'rap' ]
            });
albumList.push({
              artistName: 'Julio y Agosto',
              name: 'Julio y Agosto',
              releaseDate: '2011, October 25',
              genres: [ 'folk', 'acoustic', 'indie']
            });
albumList.push({
              artistName: 'Rocket Juice & The Moon',
              name: 'Rocket Juice & The Moon',
              releaseDate: '2012, March 26',
              genres: [ 'afrobeat', 'funk', 'neo soul', 'alternative hip hop' ]
            });

var sampleSongs = [];

sampleSongs.push({ name: 'Rise',
                   trackNumber: 1
});
sampleSongs.push({ name: 'Don\'t Touch My Hair',
                   trackNumber: 2
});
sampleSongs.push({ name: 'Cranes in the Sky',
                   trackNumber: 3
});

sampleSongs.push({ name: 'The Space Program',
                   trackNumber: 4
});
sampleSongs.push({ name: 'We The People....',
                   trackNumber: 5
});
sampleSongs.push({ name: 'Jorge Luis Enriquez',
                   trackNumber: 6
});
sampleSongs.push({ name: 'Estacion',
                   trackNumber: 7
});

sampleSongs.push({ name: 'Follow-Fashion' , trackNumber: 8 })

sampleSongs.push({ name: 'Dam(n)[feat. Erykah Badu & M.anifest]' , trackNumber: 9 })

//add all songs to each album's song list
albumList.forEach(function(album) {
   album.songs = sampleSongs;
});

db.Album.remove({}, function(err, albums){

  db.Album.create(albumList, function(err, albums){
    if (err) { return console.log('ERROR', err); }
    console.log("all albums:", albums);
    console.log("created", albums.length, "albums");

    process.exit();

  });

});
