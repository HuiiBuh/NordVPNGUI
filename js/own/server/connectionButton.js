//ToDo sobald auf irgendeinen der connect Buttons geklickt wird den worker, der den state festhält \
//pausieren lassen und erst wieder damit anfangen, wenn man einen Erfolg bei der Verbindung, oder einen \
//misserfolg zurückbekommen hat.

class ConnectionButton {
  constructor() {
//    this.state = getStateFromPython();
//    this.detailedState = getDetailedStateFromPython();
//    this.oldDetailedState = null;
  }

  getState() {
    return this.state;
  }

  async getStateFromPython() {
    return await eel.get_connection_status()();
  }

  async getDetailedStateFromPython() {
    return await eel.get_status()();
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

  setStateUI(detailedState, oldDetailedState) {
    //Set connected message
    if (detailedState !== 0 && !detailedState.includes("Disconnected") && detailedState !== oldDetailedState) {
      oldDetailedState = detailedState;
      document.getElementById("connectionMessage").innerHTML = "&#8226; Connected";
      document.getElementById("connectionMessage").style.color = "green";
      document.getElementById("quickConnectButton").innerHTML = "Disconnect";
      document.getElementById("detailedConnectionMessage").innerHTML = "Connected to " + status[2] + "(" + status[4] + ")";
    }
    //set disconnected message
    else if (detailedState.includes("Disconnected") && detailedState !== oldDetailedState) {
      oldDetailedState = detailedState;
      document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
      document.getElementById("connectionMessage").style.color = "red";
      document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
      document.getElementById("detailedConnectionMessage").innerHTML = "Pick Country, or use quick connect."
    }
    //ToDo herausfinden, wie lange sich der client verbindet und dementsprechend auch die Nachricht anpassen
    else {
      //ToDo error werfen
    }
  }

  async quickConnect() {
    //ToDo direkt auf connecting wechseln und aufpassen, dass der connect Button keine Funktion mehr hat
    return await eel.quick_connect()();
  }

  async disconnect() {
    //ToDo direkt auf disconnecting wechseln und aufpassen, dass der connect Button keine Funktion mehr hat
    return await eel.disconnect()();
  }
}

