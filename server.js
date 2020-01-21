const express = require("express");

const bodyParser = require('body-parser');

const request = require('request');
const fs = require('fs');
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


//file retrival for QA

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/QA.html");
});


// The test API URL
const demo_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo';

function downloadApiJSON(_EXTERNAL_URL) {
    /* Downloads the data as a JSON string then returns a JSON string*/
    request(_EXTERNAL_URL, (err, res, body) => {
        if (err === null) {
            console.log("Error: ", err);
        }
        fs.writeFile('myfile.json', body, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        return body;
    });
}

function callExternalApi(_EXTERNAL_URL) {
    /* Logs the body as JSON string and then returns the JSON object*/

    // Requests the body information
    request(_EXTERNAL_URL, (err, res, body) => {
        if (err === null) {
            console.log("Error: ", err);
        }
        console.log(body);
        return JSON.parse(body);
    })
}

// Calling the functions
//downloadApiJSON(demoURL);
//callExternalApi(demoURL);


// listening on port 3000, can be changed depending on the port open upon deployment

app.listen(3000, function () {
    console.log("server is running on port 3000")
});
