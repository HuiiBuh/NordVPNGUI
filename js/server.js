$(document).ready(function () {

  doneResizing();

  $("#allCountries").collapse('show')

  $("#allCountries").on('show.bs.collapse', function () {
    document.getElementById("allCountriesIcon").innerHTML = "keyboard_arrow_down";
  });
  $("#allCountries").on('hide.bs.collapse', function () {
    document.getElementById("allCountriesIcon").innerHTML = "keyboard_arrow_right";
  });

  $("#specialServers").on('show.bs.collapse', function () {
    document.getElementById("specialServerIcon").innerHTML = "keyboard_arrow_down";
  });
  $("#specialServers").on('hide.bs.collapse', function () {
    document.getElementById("specialServerIcon").innerHTML = "keyboard_arrow_right";
  });
});

var resizeId;
$(window).resize(function () {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 1);
});


function doneResizing() {
  //set the mainpage to the right height
  var body = window.innerHeight;
  var navbar = document.getElementById('navbar').offsetHeight;

  var mainPageHeight = body - navbar;
  document.getElementById("mainPage").style.height = (mainPageHeight).toString() + "px";

  //set the floating connect Button to the right position
  mapWidth = document.getElementById("map").offsetWidth;
  connectionStatusWidth = mapWidth * 2 / 3;

  connectionStatusBox = document.getElementById("connectionStatusBox");


  if (mapWidth > 575) {
    connectionStatusBox.style.width = (connectionStatusWidth).toString() + "px";
    connectionStatusBox.style.right = (mapWidth * 1 / 6).toString() + "px";
    connectionStatusBox.style.bottom = (mainPageHeight * 1 / 40).toString() + "px";
  }
  else {
    connectionStatusBox.style.width = (mapWidth).toString() + "px";
    connectionStatusBox.style.right = "15px";
    connectionStatusBox.style.bottom = (mainPageHeight * 1 / 40).toString() + "px";
  }

  connectionStatus = document.getElementById("connectionStatus");
  connectionStatusHight = connectionStatus.offsetHeight;
  if (connectionStatusHight > 63) {
    connectionStatus.style.paddingTop = "0px"
  }
  else if (connectionStatusHight == 60) {
    connectionStatus.style.paddingTop = "15px"
  }
}


/*

$(function() {
  //add BT DD show event
  $(".dropdown").on("show.bs.dropdown", function() {
    var $btnDropDown = $(this).find(".dropdown-toggle");
    var $listHolder = $(this).find(".dropdown-menu");
    //reset position property for DD container
    $(this).css("position", "static");
    $listHolder.css({
      "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
      "left": $btnDropDown.offset().left + "px"
    });
    $listHolder.data("open", true);
  });
  //add BT DD hide event
  $(".dropdown").on("hidden.bs.dropdown", function() {
    var $listHolder = $(this).find(".dropdown-menu");
    $listHolder.data("open", false);
  });
  //add on scroll for table holder
  $(".ak-holder").scroll(function() {
    var $ddHolder = $(this).find(".dropdown")
    var $btnDropDown = $(this).find(".dropdown-toggle");
    var $listHolder = $(this).find(".dropdown-menu");
    if ($listHolder.data("open")) {
      $listHolder.css({
        "top": ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
        "left": $btnDropDown.offset().left + "px"
      });
      $ddHolder.toggleClass("open", ($btnDropDown.offset().left > $(this).offset().left))
    }
  })
});

*/