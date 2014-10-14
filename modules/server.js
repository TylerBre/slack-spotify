module.exports = function () {

    var run = function(){
        var package = require('package');
        var colors = require('colors');
        var express = require('express');
        var bodyParser = require('body-parser');
        var spotifyRequest = require('request');

        var app = express();
        app.use(bodyParser.json());

        app.post('/ideato/spotify', function (req, res) {

            var isResponseOk = function (error, response) {
                return !error && response.statusCode == 200;
            };

            var albumsFound = function (albumsLength) {
                return albumsLength !== 0;
            };

            var fetchAlbums = function (responseText) {
                return JSON.parse(responseText);
            };

            console.log('GET: ' + "https://api.spotify.com/v1/search?q=" + req.body.text + "&type=album");
            spotifyRequest("https://api.spotify.com/v1/search?q=" + req.body.text + "&type=album", function (error, response, body) {
                if (isResponseOk(error, response)) {
                    var djSelector = require('./djSelector'),
                        musicSender = require('./musicSender'),
                        albums = fetchAlbums(body),
                        albumsLength = albums.albums.items.length,
                        album = {};

                    if (!albumsFound(albumsLength)) {
                        res.json(
                            {
                                text: 'Artist not Found'
                            }
                        );
                        return;
                    }

                    album = djSelector.select(albums);

                    musicSender.send(album, res);
                }
            });

        });

        var server = app.listen(3001, function (err) {
            if (err) {
                console.log("Error:", err);
                process.exit(1);
            }

            console.log('Listening on port %d', server.address().port);
            console.log(package.name.red + "@" + package.version.yellow + " starting up".green);
        });
    };

    return {
        run : run
    };
}();
