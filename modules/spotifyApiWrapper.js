var request = require('request-promise');

var app = require('../app');
var djSelector = require('./djSelector');
var musicSender = require('./musicSender');

module.exports = function (req, res, next) {
  console.log(req.body);

  var query = req.body.text;

  return request({
    uri: 'https://api.spotify.com/v1/search',
    method: 'GET',
    json: true,
    qs: {
      q: query,
      type: queryType(query),
      market: 'US'
    }
  })
  .then(function (body) {
    if (isAlbum(query)) return musicSender.send(djSelector.select(body));
    return musicSender.send(body.tracks.items[0].external_urls.spotify);
  }).catch(function (e) {
    res.send('Something went wrong :(');
  });
};

function isAlbum (query) {
  return query.indexOf('album:') >= 0;
}

function queryType (query) {
  return (isAlbum(query)) ? 'album' : 'track';
}
