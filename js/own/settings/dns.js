class DNS {
  constructor(dns) {
    //gets DNS from Python
    //    this.dns = getDNSFromPython();
    this.dns = "1.1.1.1"
    //checks if dns is valid and sets the dns in the UI
    this.setDNS(this.dns);
    this.setDNSUI(this.dns);
  }

  getDNS() {
    return this.dns;
  }

  setDNS(dns) {
    if (this.checkDSNFormat(dns)) {
      this.dns = dns;
    }
  }

  saveDNS(dns) {
    this.setDNS(dns);
    this.setDNSInPython(dns);
    this.setDNSUI(dns);
  }

  getDNSFromPython() {
    //TODO noch eine Anbindung an python hinzufügen.
  }

  setDNSInPython(dns) {
    //TODO noch eine Anbindung an python hinzufügen.
  }

  getDNSFromUI() {
    return document.getElementById("setcustomDNS").value;
  }

  setDNSUI(dns) {
    if (this.checkDSNFormat(dns)) {
      let dnsBadge = document.getElementById("customDNSBadge");
      //there is already DNS badge
      if (dnsBadge != null) {
        if (dns != dnsBadge.innerHTML) {
          dnsBadge.innerHTML = dns
        }
        //the DNS Badge gets created
      } else {
        document.getElementById("DNSModalTrigger").innerHTML = 'Change DNS';
        let badge = document.createElement("span");
        badge.className = "badge badge-secondary";
        badge.id = "customDNSBadge";
        badge.style.marginRight = "5px";
        let customDNS = document.createTextNode(dns);
        badge.appendChild(customDNS);
        //insert the dns Badge
        let element = document.getElementById("customDNSText");
        let child = document.getElementById("DNSModalTrigger");
        element.insertBefore(badge, child);
      }
      $("#DNSChange").modal("hide");
    }
    else{

      let customDNS = document.getElementById("setcustomDNS");
      customDNS.value = "";
      customDNS.placeholder = "Not the right DNS format";
    }
  }

  checkDSNFormat(dns) {
    if ((/^\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?$/.test(dns)))
      return true;
    else {
      console.log("DNS has not the right format")
      return false;
    }
  }
}