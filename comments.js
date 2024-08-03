// Create web seerver
// Create a simple web server that can respond to requests for comments at a particular URL.
// The URL should be in the form /comments/nnn where nnn is a number. When a request is received, the server should look up the comment with the corresponding number (converted to a string) in the array of comments that has been provided as a variable in the server code. If the comment exists, the server should return it as a JSON object. If it does not, the server should return a 404 error.

// Here is an example of the array of comments:

// var comments = [
//   { number: 1, text: "I'm the first comment!" },
//   { number: 2, text: "I'm the second comment!" },
//   { number: 3, text: "I'm the third comment!" },
//   { number: 4, text: "I'm the fourth comment!" }
// ];
// The server code should be written in Node.js and should create a server that listens on port 8080. The server should return a 404 error if a URL other than /comments/nnn is requested.

// The server should return a 404 error if a comment with the requested number does not exist.

const http = require('http');
const url = require('url');

var comments = [
  { number: 1, text: "I'm the first comment!" },
  { number: 2, text: "I'm the second comment!" },
  { number: 3, text: "I'm the third comment!" },
  { number: 4, text: "I'm the fourth comment!" }
];

const server = http.createServer((req, res) => {
  const urlParts = url.parse(req.url);
  const path = urlParts.pathname;
  const parts = path.split('/');
  if (parts.length === 3 && parts[1] === 'comments') {
    const number = parseInt(parts[2], 10);
    const comment = comments.find(comment => comment.number === number);
    if (comment) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(comment));
    } else {
      res.writeHead(404);
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8080, () => { console.log('Server running on port 8080'); }
