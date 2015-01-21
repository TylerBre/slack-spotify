var app = require('express')();
var bodyParser = require('body-parser');

/*==========  middleware  ==========*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*==========  app vars  ==========*/

app.set('port', process.env.PORT || 3001);

/*==========  routes  ==========*/

app.post('/spotify', require('./modules/spotifyApiWrapper'));

/*==========  initialize  ==========*/

app.listen(app.get('port'), function (err) {
  if (err) {
    console.log("Error:", err);
    process.exit(1);
  }

  console.log('Listening on port %d', app.get('port'));
});
