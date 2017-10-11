// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whomi',function(req,res){
  var headers = req.headers;
  var iAdd = headers['x-forwarded-for'];
  var langs = headers['accept-language'];
  
  res.json({
   ipaddress:iAdd?iAdd.split(',')[0]:'',
    language:langs?langs.split(',')[0]:'',
    software:headers['user-agent'].split(') ')[0].split(' (')[1]
  });
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
