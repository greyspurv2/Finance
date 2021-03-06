
        
        //exporting the api data modules to use in chart.js it should be called by calling the function APIdata. If you want to call the fuction
        //You have to call it by APIdata.APIdata();
        
        const APIdataBTC = require("./module1");
        const APIdataETH = require("./module2");
        const APIdataLTC = require("./module3");
        const APIdataETC = require("./module4");
        const APIdataXRP = require("./module5");
        
        const APIdataAAPL = require("./module6");
        const APIdataGOOGL = require("./module7");
        const APIdataSP500 = require("./module8");
        const APIdataBYND = require("./module9");
        const APIdataTSLA = require("./module10");
        

        var myChartBTC = APIdataBTC;
        var myChartETH = APIdataETH;
        var myChartLTC = APIdataLTC;
        var myChartETC  = APIdataETC;
        var myChartXRP  = APIdataXRP;

        var myChartAPPL  = APIdataAAPL;

        var myChartGOOGL  = APIdataGOOGL;

        var myChartSP500  = APIdataSP500;

        var myChartBYND  = APIdataBYND;

        var myChartTSLA  = APIdataTSLA;


        //crypto canvas ------------------------------------------------------------------------------------------------------------

        var ctx = document.getElementById("myChartBTC").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartETH").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartLTC").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartETC").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartXRP").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });



        //Stocks canvas ------------------------------------------------------------------------------------------------------------

        var ctx = document.getElementById("myChartAPPL").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartGOOGL").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartSP500").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartBYND").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });

        var ctx = document.getElementById("myChartTSLA").getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Prices",
                    backgroundColor: '#8dc647',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },
            // Configuration options go here
            options: {}
        });
