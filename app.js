var incomingWebHook = "..."; //insert your Your Unique Webhook URL
var express = require('express');
var app = express();

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post('/ideato/spotify', function (req, res) {

    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var albums = JSON.parse(this.responseText),
                albumsLength = albums.albums.items.length,
                index = 0;

            if (albums.albums.items.length === 0) {
                res.json(
                    {
                        text: 'Artist not Found'
                    }
                );
                return;
            }

            if(albumsLength > 1){
                index = Math.floor((Math.random() * albumsLength) + 1);
            }

            console.log('Sending response:' + albums.albums.items[index].external_urls.spotify);
            var text = 'Listen: ' + albums.albums.items[index].external_urls.spotify + ' Name: '
                + albums.albums.items[index].name + ' - ' + albums.albums.items[index].images[0].url;
            var params = '{"text":"' + text + '"}';
            var http = new XMLHttpRequest();
            http.open("POST", incomingWebHook, true);
            http.onreadystatechange = function () {
                if (http.readyState == 4) {
                    res.send('Have fun!!');
                }
            }
            http.send(params);
        }

    };

    console.log('GET: ' + "https://api.spotify.com/v1/search?q=" + req.body.text + "&type=album");
    xhr.open("GET", "https://api.spotify.com/v1/search?q=" + req.body.text + "&type=album");
    xhr.send();

});

var server = app.listen(3001, function () {
    console.log('Listening on port %d', server.address().port);
});
