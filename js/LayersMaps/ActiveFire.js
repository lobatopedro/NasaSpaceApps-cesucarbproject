var activeFire = document.querySelector("#ActiveFire");

activeFire.addEventListener("click", function () {

    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

    var layerClima = "MOD14A1_M_FIRE";

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

    var createLayer = function (xmlDom) {
        showGlobe()
        hideFilter()
        hideTable()
        var wms = new WorldWind.WmsCapabilities(xmlDom);
        var wmsLayerCapabilities = wms.getNamedLayer(layerClima);
        var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
        var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
        wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
        console.log("There was a failure retrieving the capabilities document: " +
            text +
            " exception: " + exception);
    };

    $.get(serviceAddress).done(createLayer).fail(logError);

})
