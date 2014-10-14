module.exports = function () {
    var spotifyRequest = require('request');
    var config = require('config');

    var send = function (album, res) {
        var incomingWebHook = {
            url: config.get('Slack.incomingWebHook'),
            text: '{"text":"' + album + '"}'
        };

        spotifyRequest.post(
            incomingWebHook.url,
            {
                method: 'POST',
                body: incomingWebHook.text
            },
            function(error, response) {
                if (!error && response.statusCode == 200) {
                    res.send('Have fun!!');
                }

            }
        );
    };

    return {
        send: send
    };
}();

