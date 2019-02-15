//executed once when the page gets loaded
$(document).ready(function () {

    document.getElementById("map").addEventListener('contextmenu', event => event.preventDefault());

    initalizeElements();

    creteWorker();

});

//position the elements only when the whole conted got loaded
$(document).ready(function (){
    positionElements();
});


function initalizeElements() {
    $("#allCountries").on('show.bs.collapse', function () {
        document.getElementById("allCountriesIcon").innerHTML = "keyboard_arrow_down";
    });
    $("#allCountries").on('hide.bs.collapse', function () {
        document.getElementById("allCountriesIcon").innerHTML = "keyboard_arrow_right";
    });

    $("#specialServers").on('show.bs.collapse', function () {
        document.getElementById("specialServerIcon").innerHTML = "keyboard_arrow_down";
    });
    $("#specialServers").on('hide.bs.collapse', function () {
        document.getElementById("specialServerIcon").innerHTML = "keyboard_arrow_right";
    });

    $("#allCountries").collapse('show');
}

function positionElements() {
    //set the mainpage to the right height
    let body = window.innerHeight;
    let navbar = document.getElementById('navbar').offsetHeight;

    let mainPageHeight = body - navbar;
    document.getElementById("mainPage").style.height = (mainPageHeight).toString() + "px";

    //set the floating connect Button to the right position
    let mapWidth = document.getElementById("map").offsetWidth;
    let connectionStatusWidth = mapWidth * 2 / 3;

    let connectionStatusBox = document.getElementById("connectionStatusBox");


    if (mapWidth > 575) {
        connectionStatusBox.style.bottom = (mainPageHeight / 40).toString() + "px";
        connectionStatusBox.style.right = (mapWidth / 6).toString() + "px";
        connectionStatusBox.style.width = (connectionStatusWidth).toString() + "px";
    } else {
        connectionStatusBox.style.bottom = (mainPageHeight / 40).toString() + "px";
        connectionStatusBox.style.right = "15px";
        connectionStatusBox.style.width = (mapWidth).toString() + "px";
    }


    connectionStatus = document.getElementById("connectionStatus");
    temp = connectionStatus.clientHeight
    if (temp > 48) {
        connectionStatus.style.marginTop = ((90 - temp) / 2).toString() + "px";
    }
    else {
        connectionStatus.style.marginTop = ((90 - temp) / 2).toString() + "px";
    }
}


function creteWorker() {


}


//calls the positionElements() 5ms after a resizeEvent (if no other resize event has occurred)
let resizeId;
$(window).resize(function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(positionElements, 5);
});