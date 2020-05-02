const url = require('url');
const request = require('request');


const IntraStockURL = (itvl = 1, symb = 0) => {
    // takes in variables and processes them in the array
    let symbolArr = ["SPY", "TSLA", "AAPL", "GOOGL", "BYND"]
    let interval = ["1min", "5min", "15min", "30min", "60min"]
    let key = "JVQKTJDSYHG974CO"

    // makes a URL object
    const myUrl = new URL("https://www.alphavantage.co/query?");

    myUrl.searchParams.append('function', "TIME_SERIES_INTRADAY");
    myUrl.searchParams.append('symbol', symbolArr[symb]);
    myUrl.searchParams.append('interval', interval[itvl]);
    myUrl.searchParams.append('apikey', key);

    //logs the URL
    //console.log(myUrl.href);
    return myUrl.href;
}

const StockURL = (func = 4, symb = 0, value_type = 1) => {

    let functArr = ["TIME_SERIES_DAILY", "TIME_SERIES_DAILY_ADJUSTED", "TIME_SERIES_WEEKLY", "TIME_SERIES_WEEKLY_ADJUSTED", "TIME_SERIES_MONTHLY", "TIME_SERIES_MONTHLY_ADJUSTED"];
    let symbolArr = ["SPY", "TSLA", "AAPL", "GOOGL", "BYND"];
    let key = "JVQKTJDSYHG974CO";
    const myUrl = new URL("https://www.alphavantage.co/query?");


    myUrl.searchParams.append('function', functArr[func]);
    myUrl.searchParams.append('symbol', symbolArr[symb]);
    myUrl.searchParams.append('apikey', key);

    //["1. open", ["2. high"], ["3. low"], []]

    //console.log(myUrl.href);
    return myUrl.href;
}

const CryptoURL = (func = 2, symb = 0, value_type = 3) => {

    let functArr = ["DIGITAL_CURRENCY_DAILY", "DIGITAL_CURRENCY_WEEKLY", "DIGITAL_CURRENCY_MONTHLY"];
    let symbolArr = ["BTC", "ETH", "LTC", "ETC", "XRP"];
    let market = "USD";
    let key = "JVQKTJDSYHG974CO";

    const myUrl = new URL("https://www.alphavantage.co/query?");

    myUrl.searchParams.append('function', functArr[func]);
    myUrl.searchParams.append('symbol', symbolArr[symb]);
    myUrl.searchParams.append('market', market);
    myUrl.searchParams.append('apikey', key);

    const _LIST = ["1a. open (CNY)", "1b. open (USD)", "2a. high (CNY)", "2b. high (USD)", "3a. low (CNY)", "3b. low (USD)", "4a. close (CNY)", "4b. close (USD)", "5. volume", "6. market cap (USD)"]
    console.log("CryptoURL will display", _LIST[value_type]);

    //console.log(myUrl.href);
    return myUrl.href;
}

const getData = (url, value_type, callback) => {
    return request(url, function (error, response, body) {
        //console.error('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode)
        body = JSON.parse(body);

        // Gets array of the keys in the object,
        // ["Meta Data", "Time Series (depends on type of url)"]
        var keys = [];
        for (var k in body) keys.push(k);

        // Gets the "Time Series ()" object
        const data = body[keys[1]];
        //console.log(data);
        /* Example:
        "data: {
            "2020-01-23 16:00:00": {  // <--- key used later
                "1. open": "166.6600",
                "2. high": "166.8100",
                "3. low": "166.5700",
                "4. close": "166.7200",
                "5. volume": "934090"
        }, (Next element)
        */

        // A List of the dates to be used in the chart x-axis values
        let dates = [];


        let objectjson = [];
        // [
        //  {
        //    "label": date[i],
        ///   "value": 
        // }
        //]

        var i = 0;
        for (var key in data) {
            // [....date, date, key<--push]
            dates.push(key);

            let newObject = { label: "date", value: "value" }

            newObject.label = dates[i];
            //console.log("Current label is:", newObject.label);

            newObject.value = data[dates[i]]["2. high"];
            //console.log("Current data is:", data[dates[i]]["2. high"]);

            objectjson.push(newObject);
            i++;
        }
        //console.log("ObjectJSON", objectjson);
        //console.log("Dates", dates);
        return objectjson;
    });
}

//getData("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo", (objectjson) => console.log(objectjson));

//getData(StockURL(0, 0), (objectjson) => console.log("async: ", objectjson));
//console.log("aSync await:", CryptoURL(2, 0));
exports.getData = getData;
exports.StockURL = StockURL;
exports.IntraStockURL = IntraStockURL;
exports.CryptoURL = CryptoURL;

// Not Working- Need to return objectjson somehow?
/*
app.get('/api/data/stock', (req, res) => {
    data = myURL.getData(myURL.StockURL(0, 0, (objectjson) => res.json(objectjson)));
})
*/