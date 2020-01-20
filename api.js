const request = require("request");
const fs = require("fs");

const apiURL = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&outputsize=full&apikey=demo";
//apiURL = 'https://test-proj-heroku.herokuapp.com/api/plans';


function getAPIData(url) {
    request(url, function (error, response, body) {
        // Prints error if there is one
        //console.log("error:", error);
        //  Prints response status code if one was recieved
        //  potentially do something (400+ codes open the new tab witht the 1 min timer)
        //console.log("StatusCode", response.statusCode);
        return response;
    });
}

api_output = getAPIData(apiURL);

//fs.writeFile('myfile.json', JSON.stringify(api_output), (err) => {
//    if (err) throw err;
//    console.log('The file has been saved!');
//}