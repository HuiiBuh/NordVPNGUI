//ToDo sobald auf irgendeinen der connect Buttons geklickt wird den worker, der den state festhält
// pausieren lassen und erst wieder damit anfangen, wenn man einen Erfolg bei der Verbindung, oder einen
// misserfolg zurückbekommen hat.

// ToDO         outerTr.country = this; something like this for disconnect

// ToDo (disconn) direkt auf disconnecting wechseln und aufpassen, dass der connect Button keine Funktion mehr hat

// ToDo (quick) direkt auf connecting wechseln und aufpassen, dass der connect Button keine Funktion mehr hat

class ConnectionButton {
    constructor(detailedState, state) {
        this.state = state;
        console.log(this.state);
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
        //Set connected message
        if (this.detailedState !== 0 && !this.detailedState.includes("Disconnected") && this.detailedState !== this.oldDetailedState) {
            this.oldDetailedState = this.detailedState;
            document.getElementById("connectionMessage").innerHTML = "&#8226; Connected";
            document.getElementById("connectionMessage").style.color = "green";
            document.getElementById("quickConnectButton").innerHTML = "Disconnect";
            document.getElementById("detailedConnectionMessage").innerHTML = "Connected to " + this.detailedState[2] + " (" + this.detailedState[4] + ")";
        }
        //set disconnected message
        else if (this.detailedState.includes("Disconnected") && this.detailedState !== this.oldDetailedState) {
            this.oldDetailedState = this.detailedState;
            document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
            document.getElementById("connectionMessage").style.color = "red";
            document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
            document.getElementById("detailedConnectionMessage").innerHTML = "Pick Country, or use quick connect."
        }
        // ToDo noch connecting hinzufügen
        else {
            // ToDo error werfen
        }
    }

    connect(){
        if (this.state){
            eel.disconnect();
        }
        else {
            eel.quick_connect();
        }

    }
}

