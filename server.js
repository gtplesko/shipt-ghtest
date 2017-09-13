var express = require('express');
var app = express();
var request = require('request');
var fs = require('fs');
var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

//Express will use the /public directory for css, js and images
app.use(express.static(__dirname + '/public'));

//homepage
app.get('/', function(req, res) {
  res.render('index');
});
//no user input
app.get('/user', function(req, res) {
  res.render('404');
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
        if(info.message==undefined){//messages only show up if github was upset about something.
          res.render('user', info);
        }else{
          res.render('index');//This should never happen
        }
      }else{
      /*  fs.appendFile('log.txt', (' ----- \n Username input: ' + user + '\n Options: '  + JSON.stringify(options) + '\n Body: '  + body + '\n Error: '  + error + '\n Response: ' + JSON.stringify(response) + '\n ----- \n'), function (err) {
          if (err){
            throw err;
          };
        });*/
        res.render('404');//catches errors
      }
    }

    request(options, callback);
  }

});


app.listen(port, function() {
    console.log('Running on http://localhost:' + port);
});
