var http = require("http");


var PORT = 7000;
var PORTTWO = 7500;
var server = http.createServer(handleRequest);
var secondServer = http.createServer(secondRequest);

function handleRequest(request, response) {
    response.end("You're AWESOME! Great job!");
}

function secondRequest(request, response) {
    response.end('Today wasnt your day, go back to bed.');
}

server.listen(PORT, function () {
    console.log('Positive response on Port: ' + PORT);
});

secondServer.listen(PORTTWO, function () {
    console.log('Negative response on Port: ' + PORTTWO);
})



