/**
 * Main file [APP NodeJS]
 */

// Server declaration
const server = require("http");

// Server creation
server.createServer(function(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    res.end("<h1>Han Shot First ! ! !</h1>");
}).listen(8080);

// Server creation (Rewritten in ES6)
/*server.createServer(
    (req, res) => {
    }
).listen();*/