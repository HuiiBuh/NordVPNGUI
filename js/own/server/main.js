var connectButton;

eel.expose(updateStatus);

function updateStatus(detailedState, state) {
    if (typeof connectButton == "undefined") {
        connectButton = new ConnectionButton(detailedState, state);
        connectButton.setStateUI()

    } else {
        connectButton.setState(detailedState, state)
        connectButton.setStateUI()
    }
}


window.onload = async function () {

    //create a new ConnectionButton (ToDo position the button)


    //create a new Map
    am4map = new Map("map");
    am4map.createMyMap();

    contextmenu();

    json = [{
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


    var countries = await eel.return_cities()();



    var array = ["s", "t", "g", "sf", "tg", "gh", "sd", "th", "gk", "vs", "et", "gt", "sd", "tw", "gg"]

    for (i = 0; i < array.length; ++i) {
        array[i] = new Country("Germany", ["Saab", "Volvo", "BMW"], "de", "germany");
        array[i].createElement();
    }
}


function callResetPosition() {
    am4map.resetPosition();
}
