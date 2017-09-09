var express = require('express');
var app = express();
//require('./users.js')();
var request = require('request');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

// make express look in the public directory for assets
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/user/:username', function (req, res){
  var user = req.params['username'];
  var options = {
      url: 'https://api.github.com/users/' + user,
      method: 'GET',
      headers: {
          'User-Agent': 'shipt-test'
      }
  };
  var options2 = {
      url: 'https://api.github.com/users/' + user + '/followers',
      method: 'GET',
      headers: {
          'User-Agent': 'shipt-test'
      }
  };
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      res.render('index', info);
    }
  }
  request(options, callback);
});


app.listen(port, function() {
    console.log('Running on http://localhost:' + port);
});
