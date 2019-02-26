var connectButton;
var am4map;
var mapData = new Array();

eel.expose(updateStatus);

function updateStatus(detailedState, state) {
    if (typeof connectButton == "undefined") {
        connectButton = new ConnectionButton(detailedState, state);
        connectButton.setStateUI();

    } else {
        connectButton.setState(state);
        connectButton.setDetailedState(detailedState);
        connectButton.setStateUI();
    }

    positionElements();
}


window.onload = async function () {

    let countriesObject;

    //check of the countries are stored in the sessionstorage
    if (sessionStorage.getItem("countryObject") != "undefined" && sessionStorage.getItem("countryObject") != null) {
        countriesObject = JSON.parse(sessionStorage.getItem("countryObject"));
        let countryArray = new Array(countriesObject.length);
        let i = 0;

        for (let country in countriesObject) {

            if (!countryArray.hasOwnProperty(country))
                countryArray.push(country);
            new Country(country.replace(/_/g, " "), countriesObject[country], getIsoOfCountry(country.replace(/_/g, " ")),
                country).createElement();
            ++i;
        }
    } else {
        let countriesJSON = await eel.return_cities()();
        countriesObject = JSON.parse(countriesJSON);
        sessionStorage.setItem("countryObject", JSON.stringify(countriesObject));

        let countryArray = new Array(countriesObject.length);
        let i = 0;

        for (let country in countriesObject) {

            if (!countryArray.hasOwnProperty(country))
                countryArray.push(country);
            new Country(country.replace(/_/g, " "), countriesObject[country], getIsoOfCountry(country.replace(/_/g, " ")),
                country).createElement();
            ++i;
        }
    }


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

    //create map
    am4map = new Map("map");
    am4map.createMyMap();


    //create contextmenu of map
    contextmenu();


    let arrayPosition = 0;
    for (let country in countriesObject) {
        mapData[arrayPosition] = new Object();
        mapData[arrayPosition].id = getIsoOfCountry(country.replace(/_/g, " "));
        mapData[arrayPosition].name = country.replace(/_/g, " ");
        mapData[arrayPosition].value = arrayPosition;
        mapData[arrayPosition].fill = am4core.color("#145079");
        ++arrayPosition;
    }


    am4map.setCustomData(mapData);
    positionElements();

};


window.onbeforeunload = function () {
    sessionStorage.setItem("buttonDetailedState", connectButton.getDetailedState());
};


function callConnect(ArrayPos) {
    let connectCountry = getCountryName(mapData[ArrayPos].id).replace(/ /g, "_");
    console.log(connectCountry);
    eel.connect_to_location(connectCountry, "");

}