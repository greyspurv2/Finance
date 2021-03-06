const express = require("express");

const bodyParser = require('body-parser');

const request = require('request');

const myChart = require('chart.js');

const app = express();




app.use(bodyParser.urlencoded({ extended: true }));


// file retrival for index.html

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

// file retrival for about.html

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/about.html");
});


//file retrival for contact.html

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/contact.html");
});


//file retrival for chart.html

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/chart.html");
});


//file retrival for QA

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/QA.html");
});

// request with placeholders until API have been chosen 

//real time crypto
//Bitcoin
const APIdataBTC = request("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=USD&symbol=BTC&apikey=APIKEY_Goes_Here", function (error, response, body) { console.log(body); });

//Etherum
const APIdataETH = request("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=USD&symbol=ETH&apikey=APIKEY_Goes_Here", function (error, response, body) { });

//Litecoin
const APIdataLTC = request("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=USD&symbol=LTC&apikey=APIKEY_Goes_Here", function (error, response, body) { });

//Etherum classic 
const APIdataETC = request("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=USD&symbol=ETC&apikey=APIKEY_Goes_Here", function (error, response, body) { });

//Ripple 
const APIdataXRP = request("https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&market=USD&symbol=XRP&apikey=APIKEY_Goes_Here", function (error, response, body) { });


//time series stocks 
// Apple stock
const APIdataAAPL = request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=AAPL&apikey=APIKEY_Goes_Here", function (error, response, body) { });

//google stock 
const APIdataGOOGL = request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=GOOGL&apikey=APIKEY_Goes_Here", function (error, response, body) { });

// S&P500
const APIdataSP500 = request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=SPY&apikey=APIKEY_Goes_Here", function (error, response, body) { });

// Beyond meat stock
const APIdataBYND = request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=BYND&apikey=APIKEY_Goes_Here", function (error, response, body) { });

//Tesla stock
const APIdataTSLA = request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&symbol=TSLA&apikey=APIKEY_Goes_Here", function (error, response, body) { });


//specifying the price in a JSON keypair of a stock, crypto or otherwise.




//exporting the api data modules to use in chart.js

module.exports = APIdataBTC;
module.exports = APIdataETH;
module.exports = APIdataLTC;
module.exports = APIdataETC;
module.exports = APIdataXRP;

module.exports = APIdataAAPL;
module.exports = APIdataGOOGL;
module.exports = APIdataSP500;
module.exports = APIdataBYND;
module.exports = APIdataTSLA;


// listening on port 3000, can be changed depending on the port open upon deployment

app.listen(3000, function () {
    console.log("server is running on port 3000")
});
