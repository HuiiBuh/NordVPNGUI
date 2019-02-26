$(document).ready(function () {
    document.getElementById("search").addEventListener('keydown', function (event) {


        for (let i = 0; i < countryArray.length; ++i) {
            if (countryArray[i].indexOf(event.key) != -1) {
                document.getElementById("servers").style.display = "none";
                countryArray[i].getCountryName();
                //document.getElementById("searchResults").appendChild(countryArray[i]);
                console.log(countryArray[i]);
            }
        }


    });
});
