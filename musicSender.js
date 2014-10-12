var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var config = require('config');

module.exports = function () {
    var send = function (album, res) {
        var incomingWebHook = {
                url: config.get('Slack.incomingWebHook'),
                text: '{"text":"' + album + '"}'
            },
            http = new XMLHttpRequest();

        http.open("POST", incomingWebHook.url, true);
        http.onreadystatechange = function () {
            if (http.readyState == 4) {
                res.send('Have fun!!');
            }
        };

        http.send(incomingWebHook.text);
    };

    return {
        send: send
    };
}();

