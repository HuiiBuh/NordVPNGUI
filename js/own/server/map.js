class Map {
  constructor(id) {
    this.id = id;
    this.polygonSeries = null;
    this.chart = null;
  }

  createMyMap() {
    // Create map instance
    this.chart = am4core.create(this.id, am4maps.MapChart);

    // Set map definition
    this.chart.geodata = am4geodata_worldLow;

    // Set projection
    this.chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    this.polygonSeries = this.chart.series.push(new am4maps.MapPolygonSeries());
    this.polygonSeries.exclude = ["AQ"];

    // Make map load polygon (like country names) data from GeoJSON
    this.polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = this.polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}{category}";
    polygonTemplate.fill = am4core.color("#b4b4b4");

    this.polygonSeries.mapPolygons.template.events.on("hit", event => {
      console.log(event.target.dataItem.value);
    });

    this.polygonSeries.mapPolygons.template.events.on("over", event => {
      //stops the hover event from showing on the card
      if (typeof (event.target.dataItem.value) === "undefined") {
        event.target.fill = am4core.color("#b4b4b4");
      }
    });


    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#0a283b");

    polygonTemplate.propertyFields.fill = "fill";

    // Zoom control
    this.chart.zoomControl = new am4maps.ZoomControl();
    var homeButton = new am4core.Button();
    this.chart.zoomControl.align = "right";
    this.chart.zoomControl.valign = "top";

    homeButton.events.on("hit", function () {
      this.chart.goHome();
    });

    homeButton.icon = new am4core.Sprite();
    homeButton.padding(7, 5, 7, 5);
    homeButton.width = 20;
    homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
    homeButton.marginBottom = 10;
    homeButton.parent = this.chart.zoomControl;
    homeButton.insertBefore(this.chart.zoomControl.plusButton);
  }


  resetPosition() {
    this.chart.goHome();
  }

  setCustomData(jsonData) {
    this.polygonSeries.data = jsonData;

    
    /* Example Data
        // Add some data
        polygonSeries.data = [{
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
    
        */
  }



}