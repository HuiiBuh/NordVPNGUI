function checkKey(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    saveDNS();
  }
  event.stopPropagation();
}

function saveDNS() {
  var DNS = document.getElementById("setcustomDNS").value;

  if (/^\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?$/.test(DNS)) {
    var temp = document.getElementById("customDNSBadge")
    if (temp != null) {
      if (DNS != temp.innerHTML) {
        temp.innerHTML = DNS
      }
    }
    else {
      document.getElementById("DNSModalTrigger").innerHTML = 'Change DNS';
      var badge = document.createElement("span");
      badge.className = "badge badge-secondary"
      badge.id = "customDNSBadge";
      badge.style.marginRight = "5px"
      var customDNS = document.createTextNode(DNS);
      badge.appendChild(customDNS);
      var element = document.getElementById("customDNSText");
      var child = document.getElementById("DNSModalTrigger");
      element.insertBefore(badge, child);
    }

    $("#DNSChange").modal("hide")
  }
  else {
    alert("Your DNS has not the right format.")
  }
}
/*
badge badge-secondary
*/