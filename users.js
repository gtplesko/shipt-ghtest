const request = require('request');
function user(username){
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

function followers(username){
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
