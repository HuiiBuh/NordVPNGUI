/*server.html_____________________________________________________________________________________________________________________________*/

$('#specialServers').on('hide.bs.collapse', function () {
  document.getElementById("specialServerIcon").innerHTML = "keyboard_arrow_right";
})


$('#specialServers').on('show.bs.collapse', function () {
  document.getElementById("specialServerIcon").innerHTML = "keyboard_arrow_down";
})

function changeSpecialServerIcon() {
  $("#specialServers").collapse('toggle');
}

$('#allCountries').on('hide.bs.collapse', function () {
  document.getElementById("allCountriesIcon").innerHTML = "keyboard_arrow_right";
})

$('#allCountries').on('show.bs.collapse', function () {
  document.getElementById("allCountriesIcon").innerHTML = "keyboard_arrow_down";
})

function changeAllCountriesIcon() {
  $("#allCountries").collapse('toggle')
}


window.onload = function () {
  $("#allCountries").collapse('toggle')
}

var resizeId;
var a = 1
$(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 5);
});

function doneResizing(){
  console.log($("#body").height());
}



/*settings.html_____________________________________________________________________________________________________________________________*/

function saveDNS() {
  var DNS = document.getElementById("setcustomDNS").value;
  console.log(DNS);

  if (/^\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?$/.test(DNS)) {
    document.getElementById("customDNS").checked = true;
    $("#DNSChange").modal("hide")
    document.getElementById("DNSModalTrigger").innerHTML = 'Change DNS ( custom DNS is at the moment: ' + DNS + ' )';
  }
  else {
    alert("Your DNS has not the right format.")
  }
}
