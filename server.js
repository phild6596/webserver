// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You're AWESOME! Great job!");

}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function () {

    // Log (server-side) when our server has started
    console.log('Positive response');
});

function secondRequest(request, response) {
    response.end('Today wasnt your day, go back to bed.');
}

var secondServer = http.createServer(secondRequest);

secondServer.listen(PORTTWO, function () {
    console.log('Negative response');
})