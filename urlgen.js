function getKey() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = xhttp.responseText;
            console.log(response);
        }
    };
    xhttp.open("GET", "apikey.txt", true);
    xhttp.send();
}

function genURLStock(funct, symbol, key) {

}

function genURLCrypto(funct, symbol, key) {

}


getKey()
