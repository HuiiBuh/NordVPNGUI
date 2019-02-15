function checkKey(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        saveDNS();
    }
    event.stopPropagation();
}

function saveDNS() {
    let DNS = document.getElementById("setcustomDNS").value;

    if (/^\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?\.\d\d?\d?\d?$/.test(DNS)) {
        let temp = document.getElementById("customDNSBadge");
        if (temp != null) {
            if (DNS != temp.innerHTML) {
                temp.innerHTML = DNS
            }
        } else {
            document.getElementById("DNSModalTrigger").innerHTML = 'Change DNS';
            let badge = document.createElement("span");
            badge.className = "badge badge-secondary";
            badge.id = "customDNSBadge";
            badge.style.marginRight = "5px";
            let customDNS = document.createTextNode(DNS);
            badge.appendChild(customDNS);
            let element = document.getElementById("customDNSText");
            let child = document.getElementById("DNSModalTrigger");
            element.insertBefore(badge, child);
        }

        $("#DNSChange").modal("hide")
    } else {
        alert("Your DNS has not the right format.")
    }
}