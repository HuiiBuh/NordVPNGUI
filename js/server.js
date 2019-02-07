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
  resizeId = setTimeout(doneResizing, 20);
});


function doneResizing() {
  //set the mainpage to the right height
  var body = window.innerHeight;
  var navbar = document.getElementById('navbar').offsetHeight;

  var mainPageHeight = body - navbar;
  document.getElementById("mainPage").style.height = mainPageHeight;

  //set the floating connect Button to the right position
  mapWidth = document.getElementById("map").offsetWidth;
  connectionStatusWidth = mapWidth * 2 / 3;

  document.getElementById("connectionStatusBox").style.width = connectionStatusWidth;
  document.getElementById("connectionStatusBox").style.right = mapWidth * 1 / 6;
  document.getElementById("connectionStatusBox").style.bottom = mainPageHeight * 1 / 40;

  buttonWidth = mapWidth / 10;

  if (buttonWidth < 200 && buttonWidth > 132) {
    document.getElementById("quickConnectButton").style.width = buttonWidth;
    document.getElementById("quickConnectButton").style.marginLeft = connectionStatusWidth - buttonWidth - connectionStatusWidth / 60;
    document.getElementById("connectionMessage").style.maxWidth = connectionStatusWidth - buttonWidth - connectionStatusWidth / 30;
  }
  else if (buttonWidth < 132) {
    document.getElementById("quickConnectButton").style.width = 132;
    document.getElementById("quickConnectButton").style.marginLeft = connectionStatusWidth - 132 - connectionStatusWidth / 60;
    document.getElementById("connectionMessage").style.maxWidth = connectionStatusWidth - 132 - connectionStatusWidth / 30;
  }
  else {
    document.getElementById("quickConnectButton").style.width = 200;
    document.getElementById("quickConnectButton").style.marginLeft = connectionStatusWidth - 200 - connectionStatusWidth / 80;
    document.getElementById("connectionMessage").style.maxWidth = connectionStatusWidth - 200 - connectionStatusWidth / 40;
  }
}


function resizeMap() {

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