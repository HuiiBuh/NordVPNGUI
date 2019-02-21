class Country {

  constructor(countryName, cities, countryISO, connectName) {
    this.countryName = countryName;
    this.cities = cities;
    this.countryISO = countryISO
    this.connectName = connectName;
  }

  createElement() {
    var outerTr = document.createElement("tr");
    outerTr.style.cursor = "pointer";
    document.getElementById("allCountriesTabelBody").appendChild(outerTr);

    var countryTd = document.createElement("td");
    countryTd.classList.add("align-middle");
    outerTr.appendChild(countryTd);

    var iconSpan = document.createElement("span");
    iconSpan.classList.add("align-middle", "flag-icon", "flag-icon-" + this.countryISO);
    countryTd.appendChild(iconSpan);

    var countrySpan = document.createElement("span");
    countrySpan.classList.add("align-middle");
    countrySpan.style.paddingBottom = "0.1rem";
    countrySpan.innerHTML = "&nbsp;&nbsp;" + this.countryName;
    countryTd.append(countrySpan);

    var dropTd = document.createElement("td");
    dropTd.classList.add("align-middle", "dropleft");
    outerTr.appendChild(dropTd);

    var icon = document.createElement("i");
    icon.classList.add("material-icons", "align-middle");
    icon.style = "float:right";
    icon.setAttribute("data-toggle", "dropdown");
    icon.setAttribute("aria-expanded", "false");
    icon.setAttribute("aria-haspopup", "  ");
    icon.innerHTML = "more_horiz";
    dropTd.appendChild(icon);


    var dropdownDiv = document.createElement("div");
    dropdownDiv.classList.add("dropdown-menu");
    dropTd.appendChild(dropdownDiv);

    var countryTable = document.createElement("table")
    countryTable.classList.add("table", "table-borderless", "hover");
    countryTable.style.marginBottom = "0";
    dropdownDiv.appendChild(countryTable);

    var countryTbody = document.createElement("tbody")
    countryTable.appendChild(countryTbody);


    for (var i = 0; i < this.cities.length; ++i) {
      var countryTr = document.createElement("tr");
      countryTable.style.cursor = "pointer";
      countryTbody.appendChild(countryTr);

      var countryTd = document.createElement("td");
      countryTd.classList.add("align-middle");
      countryTd.innerText = this.cities[i];
      countryTr.appendChild(countryTd);
      
      var countyIconTd = document.createElement("td");
      countryTr.appendChild(countyIconTd);

      var countryIcon = document.createElement("a");
      countryIcon.classList.add("material-icons");
      countryIcon.style = "color: #145079; float: right;";
      countryIcon.innerHTML = "cached";
      countyIconTd.appendChild(countryIcon);



    }




    //ToDO Dropdown Menü



  }
}