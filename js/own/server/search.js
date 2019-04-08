$(document).ready(function () {
    document.getElementById("search").addEventListener('input', evt => {
        let searchBox = document.getElementById("search");
        if (searchBox.value != "") {
            document.getElementById("searchResultsTable").innerHTML = "";
            document.getElementById("searchResults").style.display = "block";
            document.getElementById("server").style.display = "none";
            for (let i = 0; i < countryArray.length; ++i) {
                if (countryArray[i].countryName.toLowerCase().indexOf(searchBox.value.toLowerCase()) != -1) {
                    countryArray[i].createElement("searchResultsTable");
                }
            }
        } else {
            document.getElementById("searchResults").style.display = "none";
            document.getElementById("searchResultsTable").innerHTML = "";
            document.getElementById("server").style.display = "block";
        }
    })
});