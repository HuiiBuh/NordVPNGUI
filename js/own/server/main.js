var connectButton;
var am4map;
var mapJSON;

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

    //check of the countries are stored in the sessionstorage
    if (sessionStorage.getItem("countryObject") != "undefined" && sessionStorage.getItem("countryObject") != null) {
        let countriesObject = JSON.parse(sessionStorage.getItem("countryObject"));
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
        let countriesObject = JSON.parse(countriesJSON);
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

    mapJSON = [{
        "id": "US",
        "name": "United States",
        "value": 1,
        "fill": am4core.color("#145079"),
    }, {
        "id": "FR",
        "name": "France",
        "value": 6,
        "fill": am4core.color("#145079")
    }, {
        "id": "BR",
        "name": "Brasilien",
        "value": 2,
        "fill": am4core.color("#145079")
    }, {
        "id": "DE",
        "value": 2,
        "name": "Germany",
        "fill": am4core.color("#145079")
    }, {
        "id": "GB",
        "value": 3,
        "name": "Großbritannien",
        "fill": am4core.color("#145079")
    }, {
        "id": "RU",
        "value": 4,
        "name": "Russland",
        "fill": am4core.color("#145079")
    }];
    am4map.setCustomData(mapJSON);
    positionElements();

};


window.onbeforeunload = function () {
    sessionStorage.setItem("buttonDetailedState", connectButton.getDetailedState());
};
