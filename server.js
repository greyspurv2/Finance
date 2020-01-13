const express = require("express");

const app = express();


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/about.html");
});


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/QA.html");
});


app.listen(3000, function() {
    console.log("server is running on port 3000")
});