//ToDo remove _ in cities

class Country {

    constructor(countryName, cities, countryISO, connectName) {
        this.countryName = countryName;
        this.cities = cities;
        if (countryISO.length !== 2) {
            this.countryISO = null;
        } else {
            this.countryISO = countryISO.toLowerCase();
        }
        this.connectName = connectName;
    }

    createElement() {
        let outerTr = document.createElement("tr");
        outerTr.style.cursor = "pointer";
        outerTr.country = this;
        document.getElementById("allCountriesTableBody").appendChild(outerTr);

        //Icon Td
        let countryIconTd = document.createElement("td");
        countryIconTd.classList.add("align-middle");
        countryIconTd.style.width = "1.5rem";
        countryIconTd.onclick = this.connectToCountry;
        countryIconTd.country = this;
        outerTr.appendChild(countryIconTd);

        //CountryFlag
        let iconSpan = document.createElement("span");
        iconSpan.classList.add("align-middle", "flag-icon", "flag-icon-" + this.countryISO);
        iconSpan.style.width = "1.5rem";
        countryIconTd.appendChild(iconSpan);

        //CountryName
        let countryNameTd = document.createElement("td");
        countryNameTd.onclick = this.connectToCountry;
        countryNameTd.country = this;
        countryNameTd.innerHTML = this.countryName;
        outerTr.append(countryNameTd);

        //Dropdown
        let dropTd = document.createElement("td");
        dropTd.style.width = "2rem";
        dropTd.classList.add("align-middle", "dropleft");
        outerTr.appendChild(dropTd);

        //DropdownIcon
        let icon = document.createElement("i");
        icon.classList.add("material-icons", "align-middle");
        icon.style = "float:right";
        icon.setAttribute("data-toggle", "dropdown");
        icon.setAttribute("aria-expanded", "false");
        icon.setAttribute("aria-haspopup", "  ");
        icon.innerHTML = "more_horiz";
        dropTd.appendChild(icon);

        //Dropdown
        let dropdownDiv = document.createElement("div");
        dropdownDiv.classList.add("dropdown-menu");
        dropTd.appendChild(dropdownDiv);

        //DropdownTable
        let countryTable = document.createElement("table")
        countryTable.classList.add("table", "table-borderless", "hover");
        countryTable.style.marginBottom = "0";
        dropdownDiv.appendChild(countryTable);

        //DropdownTableBody
        let countryTbody = document.createElement("tbody")
        countryTable.appendChild(countryTbody);

        //Add countries
        for (let i = 0; i < this.cities.length; ++i) {
            let countryTr = document.createElement("tr");
            countryTable.style.cursor = "pointer";
            countryTbody.appendChild(countryTr);

            let countryDropTd = document.createElement("td");
            countryDropTd.classList.add("align-middle");
            countryDropTd.innerText = this.cities[i];
            countryTr.appendChild(countryDropTd);

            let countyIconTd = document.createElement("td");
            countryTr.appendChild(countyIconTd);

            let countryIcon = document.createElement("a");
            countryIcon.classList.add("material-icons");
            countryIcon.style = "color: #145079; float: right;";
            countryIcon.innerHTML = "cached";
            countyIconTd.appendChild(countryIcon);
        }
    }

    getCountryName() {
        return this.countryName;
    }

    connectToCountry(element) {
        console.log(this);
        eel.connect_to_location(this.country.connectName, "");
    }
}