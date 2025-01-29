import { createServer } from 'http';
createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hola mundo1');
}).listen(3000);