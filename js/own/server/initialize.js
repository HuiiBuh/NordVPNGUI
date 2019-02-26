//executed once when the page gets loaded
$(document).ready(function () {

    document.getElementById("map").addEventListener('contextmenu', event => event.preventDefault());
    initalizeElements();
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
