async function quickConnectButton() {
    if (document.getElementById("quickConnectButton").innerHTML.indexOf("Quick Connect") != -1) {
        if (await eel.quick_connect()) {
            await checkConnectionStatus();
            await checkStatus();
        } else {
            alert("Something went wrong in quickconnect.")
        }
    } else {
        await eel.disconnect();
        await checkConnectionStatus();
        await checkStatus();
    }
}


let connectionStatusOld = false;
async function checkConnectionStatus() {
    let connectionStatus = await eel.get_connection_status()();
    if (connectionStatus && connectionStatus !== connectionStatusOld) {
        document.getElementById("connectionMessage").innerHTML = "&#8226; Connected";
        document.getElementById("connectionMessage").style.color = "green";
        document.getElementById("quickConnectButton").innerHTML = "Disconnect";
    } else if (!connectionStatus && connectionStatus !== connectionStatusOld) {
        document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
        document.getElementById("connectionMessage").style.color = "red";
        document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
    }
    else{
        alert("Something went wrong in checkConnectionStatus")
    }
    connectionStatusOld = connectionStatus;
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

async function checkStatus() {
    let status = await eel.get_status()();

    if (status !== 0 && !status.includes("Disconnected")) {
        document.getElementById("detailedConnectionMessage").innerHTML = "Connected to " + status[2] + "(" + status[4] + ")";
    } else if (status.includes("Disconnected")) {
        document.getElementById("connectionMessage").innerHTML = "&#8226; Disconnected";
        document.getElementById("connectionMessage").style.color = "red";
        document.getElementById("quickConnectButton").innerHTML = "Quick Connect";
        document.getElementById("detailedConnectionMessage").innerHTML = "Pick Country, or use quick connect"
    } else {
        alert("Not the right result was retruned");
        console.log(status);
        //ToDo Error werfen.
    }
}
