var connectButton;

eel.expose(updateStatus);

function updateStatus(detailedState, state) {
    if (typeof connectButton == "undefined") {
        connectButton = new ConnectionButton(detailedState, state);
        connectButton.setStateUI();

    } else {
        connectButton.setState(detailedState, state);
        connectButton.setStateUI();
    }
}


window.onload = async function () {

    //create a new ConnectionButton (ToDo position the button)

    let countriesJSON = await eel.return_cities()();
    let countriesObject = JSON.parse(countriesJSON);

    //create a new Map
    let am4map = new Map("map");
    am4map.createMyMap();

    contextmenu();

    let json = [{
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

    am4map.setCustomData(json);

    let countryArray = new Array(countriesObject.length)
    let i = 0;

    for (let country in countriesObject) {
        if (!countryArray.hasOwnProperty(country))
            countryArray.push(country)
        new Country(country.replace(/_/g, " "), countriesObject[country], getIsoOfCountry(country.replace(/_/g, " ")),
            country).createElement();
        ++i;
    }
};


function callResetPosition() {
    am4map.resetPosition();
}
