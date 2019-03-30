class ConnectionButton {
    constructor(detailedState, state) {
        this.state = state;
        this.detailedState = detailedState;
        this.oldDetailedState = ["", ""];
        this.oldPlace = null;
        this.place = null;
    }

    getState() {
        return this.state;
    }

    getDetailedState() {
        return this.detailedState;
    }

    setState(state) {
        this.state = state;
    }

    setDetailedState(detailedState) {
        this.detailedState = detailedState;
    }

    // 0 = connection status
    // 1 = server
    // 2 = country
    // 3 = city
    // 4 = IP
    // 5 = protocol
    // 6 = revived data
    // 7 = send data
    // 8 = duration of the connection

    setStateUI() {
        //Set message
        if (this.detailedState[0] == "Connected" && this.oldDetailedState[1] != this.detailedState[1]) {
            this.oldDetailedState[1] = this.detailedState[1];
            document.getElementById("connectionMessage").innerHTML = "&#8226; Connected";
            document.getElementById("connectionMessage").style.color = "green";
            document.getElementById("connectionMessage").classList.remove("spinner-grow");
            document.getElementById("quickConnectButton").innerHTML = "Disconnect";
            document.getElementById("quickConnectButton").onclick = connectButton.disconnect;
            document.getElementById("detailedConnectionMessage").innerHTML = "Connected to " + this.detailedState[2] + " - " + this.detailedState[3] + " (" + this.detailedState[4] + ")";

            this.oldPlace;
            this.place = mapData.find(getValue);

            if (typeof(this.place) !== "undefined" && this.place !== null)
                this.place = this.place.value;

            if (typeof (this.place) !== "undefined" && this.place !== null) {
                if (typeof (this.oldPlace) !== "undefined" && this.oldPlace !== null)
                    mapData[this.oldPlace].fill = am4core.color("#145079");  //145079
                mapData[this.place].fill = am4core.color("#0b7900");
                am4map.resetPosition();
                am4map.setCustomData(mapData);
                this.oldPlace = this.place;
            }


        } else if (this.detailedState[0] == "Disconnected") {
            document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
            document.getElementById("connectionMessage").style.color = "red";
            document.getElementById("connectionMessage").classList.remove("spinner-grow");
            document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
            document.getElementById("quickConnectButton").onclick = connectButton.connect;
            document.getElementById("detailedConnectionMessage").innerHTML = "Pick Country, or use quick connect."
        } else if (this.detailedState == "Connecting" || this.detailedState == "Disconnecting") {
            document.getElementById("connectionMessage").innerHTML = "";
            document.getElementById("quickConnectButton").innerHTML = this.state;
            document.getElementById("connectionMessage").style.color = "orange";
            document.getElementById("connectionMessage").classList.add("spinner-grow");
            document.getElementById("quickConnectButton").onclick = null;
            document.getElementById("detailedConnectionMessage").innerHTML = "";
        }
    }

    connect() {
        eel.quick_connect();
    }

    disconnect() {
        eel.disconnect();
    }
}


function getValue(country) {
    let name = connectButton.getDetailedState();
    return country.name === name[2].replace(/ /g, "_");
}