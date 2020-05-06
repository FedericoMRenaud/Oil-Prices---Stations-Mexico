// Store our API endpoint inside queryUrl
var queryUrl = "http://127.0.0.1:5000/api/v1.0/price_state_geojson";

// Perform a GET request to the query URL
d3.json("http://127.0.0.1:5000/api/v1.0/price_state_geojson").then(function(data) {
    //console.log(data);
    createFeatures(data.features);
    createFeatures_p(data.features);
    createFeatures_d(data.features);
});


//**********************************/
// MAGNA
//**********************************/
//
function createFeatures(DataGas) {

    // 
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h4>" + feature.properties.Entidad +
        "</h4><hr><p>Precio promedio: " + feature.properties.Gas87 + "</p>");
    }

    // 
    var GasPrice = L.geoJSON(DataGas, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize(feature.properties.Gas87),
                fillColor: getColor(feature.properties.Gas87),
                color: "white",
                weight: 0.5,
                opacity: 0.7,
                fillOpacity: 0.7
            });
        },
        onEachFeature: onEachFeature
        });

    // 
    createMap(GasPrice);
}

// 
function createMap(GasPrice) {

      // 
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 16,
        id: "mapbox.streets",
        accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 16,
        id: "mapbox.dark",
        accessToken: API_KEY
    });

    // 
    var baseMaps = {
        "Street Map": streetmap,
        "Dark Map": darkmap
    };

    // 
    var overlayMaps = {
        "Magna": GasPrice
    };

    // Create our base map
    var myMap = L.map("magna-map", {
        center: [23.6345005, -102.5527878],
        zoom: 5,
        layers: [streetmap, GasPrice]
    });

    // Create a layer control
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // Create the legend
    var legend = L.control({ position: "bottomleft"  });
    
    legend.onAdd = function() {
        var legend_loc = L.DomUtil.create("div", "info legend");
        var levels = [15, 16, 17, 18, 19]
        var legend_li = [];

        // 
        for (var i = 0; i < levels.length; i++) {
            legend_li += "<li style=\"background-color: "  
            + getColor(levels[i]) 
            + "\"></li>" + levels[i] 
            + (levels[i + 1] ? '&ndash;' + 
            levels[i + 1] + '<br>' : '+');
        }
        legend_loc.innerHTML += "<ul style=\"list-style-type:circle;\">" + legend_li + "</ul>";
        return legend_loc;
    };

    // 
    legend.addTo(myMap);
}

// 
function getColor(magnituge) {
    switch (true) {
    case magnituge >= 19.0:
            return 'red';
            break;

    case magnituge >= 18.0:
        return 'orange';
        break;

    //case magnituge >= 17.0:
    //    return 'coral';
    //    break;
    
    //case magnituge >= 17.0:
    //    return 'gold';
    //    break;

    case magnituge >= 17.0:
        return 'greenyellow';
        break;

    case magnituge >= 16.0:
        return 'lightgreen';
        break;

    default:
        return 'green';
    };
};

// 
function markerSize(price) {
    return price;
};

//**********************************/
// PREMIUM
//**********************************/
//
function createFeatures_p(DataGas) {

    // 
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h4>" + feature.properties.Entidad +
        "</h4><hr><p>Precio promedio: " + feature.properties.Gas91 + "</p>");
    }

    // 
    var GasPrice = L.geoJSON(DataGas, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize_p(feature.properties.Gas91),
                fillColor: getColor_p(feature.properties.Gas91),
                color: "white",
                weight: 0.5,
                opacity: 0.7,
                fillOpacity: 0.7
            });
        },
        onEachFeature: onEachFeature
        });

    // 
    createMap_p(GasPrice);
}

// 
function createMap_p(GasPrice) {

      // 
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 16,
        id: "mapbox.streets",
        accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 16,
        id: "mapbox.dark",
        accessToken: API_KEY
    });

    // 
    var baseMaps = {
        "Street Map": streetmap,
        "Dark Map": darkmap
    };

    // 
    var overlayMaps = {
        "Premium": GasPrice
    };

    // Create our base map
    var myMap = L.map("premium-map", {
        center: [23.6345005, -102.5527878],
        zoom: 5,
        layers: [streetmap, GasPrice]
    });

    // Create a layer control
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // Create the legend
    var legend = L.control({ position: "bottomleft"  });
    
    legend.onAdd = function() {
        var legend_loc = L.DomUtil.create("div", "info legend");
        var levels = [16, 17, 18, 19, 20]
        var legend_li = [];

        // 
        for (var i = 0; i < levels.length; i++) {
            legend_li += "<li style=\"background-color: "  
            + getColor_p(levels[i]) 
            + "\"></li>" + levels[i] 
            + (levels[i + 1] ? '&ndash;' + 
            levels[i + 1] + '<br>' : '+');
        }
        legend_loc.innerHTML += "<ul style=\"list-style-type:circle;\">" + legend_li + "</ul>";
        return legend_loc;
    };

    // 
    legend.addTo(myMap);
}

// 
function getColor_p(magnituge) {
    switch (true) {
    case magnituge >= 20.0:
            return 'red';
            break;

    case magnituge >= 19.0:
        return 'orange';
        break;

    //case magnituge >= 18.0:
    //    return 'coral';
    //    break;
    
    //case magnituge >= 17.0:
    //    return 'gold';
    //    break;

    case magnituge >= 18.0:
        return 'greenyellow';
        break;

    case magnituge >= 17.0:
        return 'lightgreen';
        break;

    default:
        return 'green';
    };
};

// 
function markerSize_p(price) {
    return price;
};

//**********************************/
// DIESEL
//**********************************/
//
function createFeatures_d(DataGas) {

    // 
    function onEachFeature(feature, layer) {
        layer.bindPopup("<h4>" + feature.properties.Entidad +
        "</h4><hr><p>Precio promedio: " + feature.properties.Diesel + "</p>");
    }

    // 
    var GasPrice = L.geoJSON(DataGas, {

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: markerSize_d(feature.properties.Diesel),
                fillColor: getColor_d(feature.properties.Diesel),
                color: "white",
                weight: 0.5,
                opacity: 0.7,
                fillOpacity: 0.7
            });
        },
        onEachFeature: onEachFeature
        });

    // 
    createMap_d(GasPrice);
}

// 
function createMap_d(GasPrice) {

      // 
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 16,
        id: "mapbox.streets",
        accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 16,
        id: "mapbox.dark",
        accessToken: API_KEY
    });

    // 
    var baseMaps = {
        "Street Map": streetmap,
        "Dark Map": darkmap
    };

    // 
    var overlayMaps = {
        "Diesel": GasPrice
    };

    // Create our base map
    var myMap = L.map("diesel-map", {
        center: [23.6345005, -102.5527878],
        zoom: 5,
        layers: [streetmap, GasPrice]
    });

    // Create a layer control
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: false
    }).addTo(myMap);

    // Create the legend
    var legend = L.control({ position: "bottomleft"  });
    
    legend.onAdd = function() {
        var legend_loc = L.DomUtil.create("div", "info legend");
        var levels = [19, 19.5, 20, 20.5]
        var legend_li = [];

        // 
        for (var i = 0; i < levels.length; i++) {
            legend_li += "<li style=\"background-color: "  
            + getColor_d(levels[i]) 
            + "\"></li>" + levels[i] 
            + (levels[i + 1] ? '&ndash;' + 
            levels[i + 1] + '<br>' : '+');
        }
        legend_loc.innerHTML += "<ul style=\"list-style-type:circle;\">" + legend_li + "</ul>";
        return legend_loc;
    };

    // 
    legend.addTo(myMap);
}

// 
function getColor_d(magnituge) {
    switch (true) {
    case magnituge >= 20.5:
            return 'red';
            break;

    case magnituge >= 20.0:
        return 'orange';
        break;

    //case magnituge >= 17.0:
    //    return 'coral';
    //    break;
    
    //case magnituge >= 17.0:
    //    return 'gold';
    //    break;

    //case magnituge >= 16.0:
    //    return 'greenyellow';
    //    break;

    case magnituge >= 19.5:
        return 'lightgreen';
        break;

    default:
        return 'green';
    };
};

// 
function markerSize_d(price) {
    return price;
};