window.onload = function () {

  //create a new ConnectionButton (ToDo position the button)
  connectButton = new ConnectionButton();

  //create a new Map
  am4map = new Map("map");
  am4map.createMyMap();

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
  }, {
    "id": "BR",
    "name": "Brasilien",
    "value": 2,
    "fill": am4core.color("#145079")
  }, {
  }, {
    "id": "DE",
    "value": 2,
    "name": "Germany",
    "fill": am4core.color("#145079")
  }, {
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

  var array = ["s", "t", "g", "sf", "tg", "gh", "sd", "th", "gk", "vs", "et", "gt", "sd", "tw", "gg" ]

  for (i = 0; i < array.length; ++i) {
    array[i] = new Country("Germany", ["Saab", "Volvo", "BMW"], "de", "germany");
    array[i].createElement();
  }

}