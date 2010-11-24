var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  var currentTime = new Date()
  var hours = currentTime.getHours()
  var minutes = currentTime.getMinutes()
  var seconds = currentTime.getSeconds()
  if (minutes < 10){ minutes = "0" + minutes }
  if (seconds < 10){ seconds = "0" + seconds }
  time = hours + ":" + minutes + ":" + seconds;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<ul>');
  res.write('<li>URL: ' + req.url + '</li>');
  res.write('<li>Method: ' + req.method + '</li>');
  res.write('<li>Query: ' + url.parse(req.url)['query'] + '</li>');
  res.write('<li>host: ' + req.headers['host'] + '</li>');
  res.end('</ul>Time from node.js: ' + time + '\n');
}).listen(8089, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8089/');