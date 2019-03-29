let connectButton;
let am4map;
let countryArray = [];
let mapData = [];


window.onload = async function () {

    initalizeElements();

    //check if the buttonstate is in the session storage
    if (sessionStorage.getItem("buttonDetailedState") != "undefined" && sessionStorage.getItem("buttonDetailedState") != null) {
        let detailedState = sessionStorage.getItem("buttonDetailedState");
        if (detailedState !== 0 && !detailedState.includes("Disconnected")) {
            document.getElementById("connectionMessage").innerHTML = "&#8226; Connected";
            document.getElementById("connectionMessage").style.color = "green";
            document.getElementById("quickConnectButton").innerHTML = "Disconnect";
            document.getElementById("detailedConnectionMessage").innerHTML = "Main Connected to " + detailedState[2] + " (" + detailedState[4] + ")";
        } else if (detailedState.includes("Disconnected")) {
            document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
            document.getElementById("connectionMessage").style.color = "red";
            document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
            document.getElementById("detailedConnectionMessage").innerHTML = "Pick Country, or use quick connect."
        }
    }

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

