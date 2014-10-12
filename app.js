var express = require('express');
var bodyParser = require('body-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var spotifyRequest = new XMLHttpRequest();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var fetchAlbums = function (responseText) {
    return JSON.parse(responseText);
};

app.post('/ideato/spotify', function (req, res) {

    var isResponseOk = function (readyState) {
        return readyState == 4;
    };

    var albumsFound = function (albumsLength) {
        return albumsLength !== 0;
    };

    spotifyRequest.onreadystatechange = function () {
        if (isResponseOk(this.readyState)) {
            var djSelector = require('./djSelector'),
                musicSender = require('./musicSender'),
                albums = fetchAlbums(this.responseText),
                albumsLength = albums.albums.items.length,
                album = {};

            if (! albumsFound(albumsLength)) {
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
    };

    console.log('GET: ' + "https://api.spotify.com/v1/search?q=" + req.body.text + "&type=album");
    spotifyRequest.open("GET", "https://api.spotify.com/v1/search?q=" + req.body.text + "&type=album");
    spotifyRequest.send();
});

var server = app.listen(3001, function () {
    console.log('Listening on port %d', server.address().port);
});
