const url = require('url');
const request = require('request');


const IntraStockURL = (symb, itvl) => {
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

const StockURL = (func = 0, symb = 0) => {

    let functArr = ["TIME_SERIES_DAILY", "TIME_SERIES_DAILY_ADJUSTED", "TIME_SERIES_WEEKLY", "TIME_SERIES_WEEKLY_ADJUSTED", "TIME_SERIES_MONTHLY", "TIME_SERIES_MONTHLY_ADJUSTED"];
    let symbolArr = ["SPY", "TSLA", "AAPL", "GOOGL", "BYND"];
    let key = "JVQKTJDSYHG974CO";
    const myUrl = new URL("https://www.alphavantage.co/query?");


    myUrl.searchParams.append('function', functArr[func]);
    myUrl.searchParams.append('symbol', symbolArr[symb]);
    myUrl.searchParams.append('apikey', key);

    //console.log(myUrl.href);
    return myUrl.href;
}

const CryptoURL = (func, symb) => {

    let functArr = ["DIGITAL_CURRENCY_DAILY", "DIGITAL_CURRENCY_WEEKLY", "DIGITAL_CURRENCY_MONTHLY"];
    let symbolArr = ["BTC", "ETH", "LTC", "ETC", "XRP"];
    let market = "USD";
    let key = "JVQKTJDSYHG974CO";

    const myUrl = new URL("https://www.alphavantage.co/query?");

    myUrl.searchParams.append('function', functArr[func]);
    myUrl.searchParams.append('symbol', symbolArr[symb]);
    myUrl.searchParams.append('market', market);
    myUrl.searchParams.append('key', key);

    //console.log(myUrl.href);
    return myUrl.href;
}

const getData = (url) => {
    return request(url, function (error, response, body) {
        body = JSON.parse(body);
        var keys = [];
        for (var k in body) keys.push(k);
        const data = body[keys[1]];

        let dates = [];
        let objectjson = [];
        var i = 0;

        /*for (var x in data) {
            dates.push(x);
            objectjson.push(i);
            objectjson[i].label = dates[i];
            objectjson[i].value = data[dates[i]]["2. high"];
            i++;
        }
        console.log(objectjson);
        console.log(data["2020-01-22 15:15:00"]);
        */
    });
}

getData("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo");

exports.StockURL = StockURL;
exports.IntraStockURL = IntraStockURL;
exports.CryptoURL = CryptoURL;