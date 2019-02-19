//ToDo session storge

window.onload = function () {
  dns = new DNS();

  
  cyberSec = new Slider(true, document.getElementById("cyberSec"));
  cyberSec.setStateUI();

  autoConnect = new Slider(true, document.getElementById("autoConnect"));
  autoConnect.setStateUI();

  killSwitch = new Slider(false, document.getElementById("killSwitch"));
  killSwitch.setStateUI();
  
  customDNS = new Slider(true, document.getElementById("customDNS"));
  customDNS.setStateUI();

  protocol = new Radio("TCP", document.getElementById("UDP"), document.getElementById("TCP"));
  protocol.setStateUI();

  obfuscatedServers = new Slider(true, document.getElementById("obfuscatedServers"));
  obfuscatedServers.setStateUI();
}
