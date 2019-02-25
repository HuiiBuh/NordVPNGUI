function positionElements() {
  //set the mainpage to the right height
  let body = window.innerHeight;
  let navbar = document.getElementById('navbar').offsetHeight;

  let mainPageHeight = body - navbar -1;
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

}



//calls the positionElements() 5ms after a resizeEvent (if no other resize event has occurred)
let resizeId;
$(window).resize(function () {
    clearTimeout(resizeId);
    resizeId = setTimeout(positionElements, 5);
});


function callResetPosition() {
    am4map.resetPosition();
}