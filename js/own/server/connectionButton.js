//ToDo sobald auf irgendeinen der connect Buttons geklickt wird den worker, der den state festhält
// pausieren lassen und erst wieder damit anfangen, wenn man einen Erfolg bei der Verbindung, oder einen
// misserfolg zurückbekommen hat.

// ToDO         outerTr.country = this; something like this for disconnect

// ToDo (disconn) direkt auf disconnecting wechseln und aufpassen, dass der connect Button keine Funktion mehr hat

// ToDo (quick) direkt auf connecting wechseln und aufpassen, dass der connect Button keine Funktion mehr hat

class ConnectionButton {
    constructor(detailedState, state) {
        this.state = state;
        this.detailedState = detailedState;
        this.oldDetailedState = null;
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
        if (this.detailedState.includes("Connected") && this.detailedState !== this.oldDetailedState) {
            this.oldDetailedState = this.detailedState;
            document.getElementById("connectionMessage").innerHTML = "&#8226; Connected";
            document.getElementById("connectionMessage").style.color = "green";
            document.getElementById("connectionMessage").classList.remove("spinner-grow");
            document.getElementById("quickConnectButton").innerHTML = "Disconnect";
            document.getElementById("quickConnectButton").onclick = connectButton.disconnect;
            document.getElementById("detailedConnectionMessage").innerHTML = "Connected to " + this.detailedState[2] +" - " + this.detailedState[3] + " (" + this.detailedState[4] + ")";
        }
        else if (this.detailedState.includes("Disconnected") && this.detailedState !== this.oldDetailedState) {
            this.oldDetailedState = this.detailedState;
            document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
            document.getElementById("connectionMessage").style.color = "red";
            document.getElementById("connectionMessage").classList.remove("spinner-grow");
            document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
            document.getElementById("quickConnectButton").onclick = connectButton.connect;
            document.getElementById("detailedConnectionMessage").innerHTML = "Pick Country, or use quick connect."
        } else if (this.detailedState.includes("Connecting") || this.detailedState.includes("Disconnecting")){
            document.getElementById("connectionMessage").innerHTML = "";
            document.getElementById("quickConnectButton").innerHTML = this.state;
            document.getElementById("connectionMessage").style.color = "orange";
            document.getElementById("connectionMessage").classList.add("spinner-grow");
            document.getElementById("quickConnectButton").onclick = null;
            document.getElementById("detailedConnectionMessage").innerHTML = "";
        }
    }

    connect() {
        console.log("sdf")
        eel.quick_connect();
    }

    disconnect() {
        eel.disconnect();
    }
}
