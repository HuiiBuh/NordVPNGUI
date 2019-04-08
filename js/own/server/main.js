let connectButton;
let am4map;
let countryArray = [];
let mapData = [];

$(document).ready(async function () {
    let loginStatus = await eel.return_login_status;

    if (loginStatus)
        window.location.href = "login.html";
});


window.onload = async function () {

    initalizeElements();

    //get the countries from Python
    let countriesObject;
    let countriesJSON = await eel.return_cities()();
    countriesObject = JSON.parse(countriesJSON);

    let i = 0;
    for (let country in countriesObject) {
        if (!countryArray.hasOwnProperty(country)) {
            countryArray.push(country);
        }
        countryArray[i] = new Country(country.replace(/_/g, " "), countriesObject[country], getIsoOfCountry(country.replace(/_/g, " ")),
            country, i);
        countryArray[i].createElement("allCountriesTableBody");
        ++i;
    }

    //create map
    am4map = new Map("map");
    am4map.createMyMap();

    //create contextmenu of map
    contextmenu();

    //create the highlighting of the map
    let arrayPosition = 0;
    for (let country in countriesObject) {
        mapData[arrayPosition] = {};
        mapData[arrayPosition].id = getIsoOfCountry(country.replace(/_/g, " "));
        mapData[arrayPosition].name = country.replace(/_/g, " ");
        mapData[arrayPosition].value = arrayPosition;
        mapData[arrayPosition].fill = am4core.color("#145079");
        ++arrayPosition;
    }

    am4map.setCustomData(mapData);

    positionElements();
};

//loads the connect button state in the session storage
window.onbeforeunload = function () {
    sessionStorage.setItem("buttonDetailedState", connectButton.getDetailedState());
};

