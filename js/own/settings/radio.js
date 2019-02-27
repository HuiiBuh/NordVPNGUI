class Radio {
  constructor(state, radioUDP, radioTCP) {
    //ToDo den State entweder aus dem local storage bekommen, oder aus python abfragen.
    this.state = state;
    this.radioUDP = radioUDP;
    this.radioTCP = radioTCP;
  }

  getState() {
    return state;
  }

  setState(state) {
    this.state = state;
  }

  getStateFromUI() {
    if (this.radioTCP.checked) {
      return "TCP"
    }
    else if (this.radioUDP.checked) {
      return "UDP"
    }
  }

  setStateUI() {
    if (this.state == "TCP") {
      this.radioTCP.checked = true;
      this.radioUDP.checked = false;
    }
    else if (this.state == "UDP") {
      this.radioTCP.checked = false;
      this.radioUDP.checked = true;
    }
    else {
      console.log("The state can´t be " + this.state);
    }
  }

  getStateFromPython() {
    //TODO noch eine Anbindung an python hinzufügen.
  }

  setStatePython() {
    //TODO noch eine Anbindung an python hinzufügen.
  }

}