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
        let polygonTemplate = this.polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}{category}";
        polygonTemplate.fill = am4core.color("#b4b4b4");

        //calls the connect to country function with the array position of the country
        this.polygonSeries.mapPolygons.template.events.on("hit", event => {
            //uses the country object in the countryArray to call the connectToCountry method
            if(typeof (event.target.dataItem.value) !== "undefined")
                countryArray[event.target.dataItem.value].connectToCountry();
        });

        this.polygonSeries.mapPolygons.template.events.on("over", event => {
            //stops the hover event from showing on the card
            if (typeof (event.target.dataItem.value) === "undefined") {
                event.target.fill = am4core.color("#b4b4b4");
            }
        });


        // Create hover state and set alternative fill color
        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#0a283b");

        polygonTemplate.propertyFields.fill = "fill";

        // Zoom control
        this.chart.zoomControl = new am4maps.ZoomControl();
        let homeButton = new am4core.Button();
        this.chart.zoomControl.align = "right";
        this.chart.zoomControl.valign = "top";

        homeButton.events.on("hit", callResetPosition);

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 20;
        homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
        homeButton.marginBottom = 10;
        homeButton.parent = this.chart.zoomControl;
        homeButton.insertBefore(this.chart.zoomControl.plusButton);

        document.getElementById("map").style.backgroundColor = "#bbd2d8";
    }

    resetPosition() {
        this.chart.goHome();
    }

    setCustomData(jsonData) {
        this.polygonSeries.data = jsonData;
    }
}