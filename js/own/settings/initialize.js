$(document).ready(function () {

    $('#DNSChange').on('hidden.bs.modal	', function (e) {
        document.getElementById("setcustomDNS").placeholder = "DNS";
    })
});


function checkKeyDNS(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let dnsValue = document.getElementById("setcustomDNS").value;
        dns.saveDNS(dnsValue);
    }
    event.stopPropagation();
}

