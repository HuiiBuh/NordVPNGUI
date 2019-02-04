window.onload = function () {
  doneResizing();
  $("#allCountries").collapse('show')
}

var resizeId;
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 10);
});


$(document).ready(function () {
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


function doneResizing(){
  var body = window.innerHeight;
  var navbar = document.getElementById('navbar').offsetHeight;

  var mainPage = body - navbar;
  document.getElementById("mainPage").style.height = mainPage;
}
