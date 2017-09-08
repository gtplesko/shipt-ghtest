var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {



    //test data
     //
    //  var username = "gavin";
    //  var followCount = 20;
    //  var users = [{username: "billy", avatar: "hanko"},
    //      {username: "Cheffrey", avatar: "Mondo"}];
    // ejs render automatically looks in the views folder
    res.render('index', {
      // username: username,
      // followCount: followCount,
      // users: users
    });
});
app.get('/user/:username', takeUser);
function takeUser(req, res){
  console.log("Words");
  var user = req.params['username'];
  res.send(getUser(user));
  res.send(getFollowers(user));
  res.render('index');
}


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

const request = require('request');
function getUser(username){
  const options = {
      url: 'https://api.github.com/users/' + username,
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
          'User-Agent': 'shipt-test'
      }
  };

  request(options, function(err, res, body) {
    return body;
  });
}

function getFollowers(username){
  var thisUser = username;
  const options = {
      url: 'https://api.github.com/users/' + thisUser + '/followers',
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
          'User-Agent': 'shipt-test'
      }
  };

  request(options, function(err, res, body) {
      return body;
    });
}
