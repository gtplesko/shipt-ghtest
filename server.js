var express = require('express');
var app = express();
var request = require('request');

// set the port of our application
var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

//Express will use the /public directory for css, js and images
app.use(express.static(__dirname + '/public'));

//homepage
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/user', function(req, res) {
  res.render('index');
});

//rest API using a lookup will automatically change the page allowing users to link to certain profiles
app.get('/user/:username', function (req, res, next){
  var user = req.params['username'];
  if(user){
    var options = {
        url: 'https://api.github.com/users/' + user,
        method: 'GET',
        headers: {
            'User-Agent': 'shipt-test'
        }
    };
    function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        if(info.message==undefined){
          res.render('user', info);
        }else{
            res.render('index');
        }
      }else{
          res.render('404');
      }
    }

    request(options, callback);
  }

});


app.listen(port, function() {
    console.log('Running on http://localhost:' + port);
});
