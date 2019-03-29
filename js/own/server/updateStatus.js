eel.expose(updateStatus);
function updateStatus(detailedState, state) {
    if (typeof connectButton == "undefined") {
        connectButton = new ConnectionButton(detailedState, state);
        connectButton.setStateUI();

    } else {
        connectButton.setState(state);
        connectButton.setDetailedState(detailedState);
        connectButton.setStateUI();
    }

    positionElements();
}

