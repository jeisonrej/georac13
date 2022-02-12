//Se encarga de evaluar si el poligono dibujado se intersecta con alguno de 
//los objetos de las capas cargadas
function IntersectDrawtoLayers( jsonLayer, drawlayer, indexNormativa){	    
    var i = 0;
    L.geoJson(jsonLayer, {
        onEachFeature: function(feature, layer){
            var poly1 = feature.geometry

            L.geoJson(drawlayer, {
                onEachFeature: function(feature, layer){
                    var poly2 = feature.geometry
                    
                    intersection = turf.intersect(poly1, poly2)
                    intersectionLayer = L.geoJson(intersection, {style:{"fillColor": '#B90504', "color":"#B90504"}}).addTo(map)
                    groupLayerIntersect.addLayer(intersectionLayer);

                    i = intersection !== undefined ? i + 1 : i;
                }            
            })
        }
    })  
    
    prefactibilidad += i > 0 ? "<li>" + normatividad.norma[indexNormativa].descripcion + "</li>" :"";
}
