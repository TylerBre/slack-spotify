var request = require('request-promise');
var config = require('config');

function send (data) {

    console.log('POST: ' + config.get('Slack.incomingWebHook'));
    return request({
        uri: config.get('Slack.incomingWebHook'),
        method: 'POST',
        body: '{"text":"' + data + '"}'
    })
    .catch(function () {
      console.log('Couldn\'t post back to slack');
    });
}

module.exports = {
    send: send
};
