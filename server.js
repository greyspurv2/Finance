const express = require("express");

const bodyParser = require('body-parser');

const request = require('request');

const myChart = require('chart.js');

const app = express();




app.use(bodyParser.urlencoded({extended: true}));


// file retrival for index.html

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// file retrival for about.html

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/about.html");
});


//file retrival for contact.html

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});


//file retrival for QA

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/QA.html");
});

// request with placeholders until API have been chosen 

request("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo", function(error, response, body));




//specifying the price in a JSON keypair of a stock, crypto or otherwise.



// listening on port 3000, can be changed depending on the port open upon deployment

app.listen(3000, function() {
    console.log("server is running on port 3000")
});
