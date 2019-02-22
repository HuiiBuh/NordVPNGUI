function positionElements() {
  //set the mainpage to the right height
  let body = window.innerHeight;
  let navbar = document.getElementById('navbar').offsetHeight;

  let mainPageHeight = body - navbar;
  document.getElementById("mainPage").style.height = (mainPageHeight).toString() + "px";

  //set the floating connect Button to the right position
  let mapWidth = document.getElementById("map").offsetWidth;
  let connectionStatusWidth = mapWidth * 2 / 3;

  let connectionStatusBox = document.getElementById("connectionStatusBox");


  if (mapWidth > 575) {
      connectionStatusBox.style.bottom = (mainPageHeight / 40).toString() + "px";
      connectionStatusBox.style.right = (mapWidth / 6).toString() + "px";
      connectionStatusBox.style.width = (connectionStatusWidth).toString() + "px";
  } else {
      connectionStatusBox.style.bottom = (mainPageHeight / 40).toString() + "px";
      connectionStatusBox.style.right = "15px";
      connectionStatusBox.style.width = (mapWidth).toString() + "px";
  }


  let connectionStatus = document.getElementById("connectionStatus");
  let statusHeight = connectionStatus.clientHeight;
  if (statusHeight > 48) {
      connectionStatus.style.marginTop = ((90 - statusHeight) / 2).toString() + "px";
  }
  else {
      connectionStatus.style.marginTop = ((90 - statusHeight) / 2).toString() + "px";
  }
}