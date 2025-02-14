// const userName = "Lanny";
// const userNumber = 33;

// console.log(userName, typeof userName);
// console.log(typeof userNumber);

const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    response.statusCode = 200;
    response.end("<p>" + new Date().toISOString() + "</p>");
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<p>" + "Alright. You reached the correct port." + "</p>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
