class Slider {
  constructor(state, htmlElement) {
    //ToDo den State entweder aus dem local storage bekommen, oder aus python abfragen.
    this.state = state;
    this.htmlElement = htmlElement;
  }

  getState() {
    return state;
  }

  setState(state) {
    this.state = state;
  }

  getStateFromUI() {
    return (this.htmlElement.checked);
  }

  setStateUI() {
    this.htmlElement.checked = this.state;
  }

  getStateFromPython() {
    //TODO noch eine Anbindung an python hinzufügen.
  }

  setStatePython() {
    //TODO noch eine Anbindung an python hinzufügen.
  }
}