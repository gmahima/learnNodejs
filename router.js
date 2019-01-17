var Profile = require("./profile.js");



function home (request, response) {
  if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Header \n');
  response.write('search \n');
  response.end('Footer \n');
  }

}

function user (request, response) {
  var username = request.url.replace('/', '');
  if (username.length > 0) {
          response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Header \n');
    
var studentProfile = new Profile(username);
studentProfile.on("end", function (profileJSON) {
console.dir;
      var values = {
      avatarUrl: profileJSON.gravatar_url,
      username: profileJSON.profile_name,
      badges: profileJSON.badges.length,
      javascriptPoints: profileJSON.points.JavaScript
    }
        response.write(values.badges + '\n');
  response.end('Footer \n');
});

    
    
    
    studentProfile.on("error", function(error) {
    console.error;
      response.write(error.message);
      response.end('Footer \n');
    });


  }
}

module.exports.home = home;
module.exports.user = user;