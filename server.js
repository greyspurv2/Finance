const express = require("express");

const app = express();


// file retrival for index

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// file retrival for about

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/about.html");
});


//file retrival for contact

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});


//file retrival for QA

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/QA.html");
});


//getting the data

app.get('/apidata', (req, res) => {
    res.json(apidadata)
});



// sending the data

app.get('/apidata', (req, res) => {
    res.send({
        apidadata: []
    })
});


app.listen(3000, function() {
    console.log("server is running on port 3000")
});
