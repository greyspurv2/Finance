const express = require('express');
const path = require('path');
const memberz = require("./members");
const url = require("./url");
const request = require("request");
const fs = require("fs");

//console.log(memberz);
const app = express();

// "Time Series (5min)"
// "Meta Data"

myURL = url;
//console.log(myURL.StockURL(0, 0));

app.get('/api/data/', (req, res) => {
    request("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo", function (error, response, body) {
        let data = JSON.parse(body);
        //console.log("Data:", data["Meta Data"]);
        res.json(data["Time Series (5min)"]);
    });
});

app.get('/api/data/stock', (req, res) => {
    myURL.getData(myURL.StockURL(0, 0));
    console.log(myURL);
})

app.get('/', (req, res) => res.send('Hello World!'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Use a port which is compatible with other data
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
