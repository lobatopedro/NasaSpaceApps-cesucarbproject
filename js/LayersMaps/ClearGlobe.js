var clearGlobe = document.querySelector("#ClearGlobe");

clearGlobe.addEventListener("click", function () {

    buildGlobe();
    showGlobe()
    hideTable()
    hideFilter()

    function showGlobe() {
        var x = document.getElementById("globe");
        var canvas = document.getElementById("canvasOne");
        x.style.display = "block";
        canvas.style.width = "1370"
        canvas.style.height = "566"
        buildGlobe();
    }

    function hideFilter() {
        var x = document.getElementById("risk-filter");
        x.style.display = "none";
    }

    function hideTable() {
        var x = document.getElementById("table-wrapper");
        x.style.display = "none";
    }
    
});
