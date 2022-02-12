    //Variables Globales
	var drawlayer;
	var intersection;
	var prefactibilidad;
    var intersectRemove;
	var groupLayerIntersect = new L.FeatureGroup();
	let coloresCapas = ["#A5A5A5", "#5B9BD5", "#ED7D31", "#0033CC", "#FFC000", "#006601", "#01B925", "#D58FFD"];
	var imgCanvas;
	var jsonImported;
	var filename;


	var map = L.map('map', {
		zoomControl: true,
	}).setView([4,-72],5); 
	
	//Capas Base
	var arc = new L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map);
	var osm = new L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

	var drawnItems = L.featureGroup().addTo(map);

	L.control.scale().addTo(map);
	
	//Carga de las capas al mapa
	var frontera = L.geoJSON(fronteras, {style: {"fillColor": coloresCapas[0], "color" : coloresCapas[0]}}).addTo(map);
	var aeropuerto = L.geoJSON(aeropuertos, {style: {"fillColor": coloresCapas[1], "color" : coloresCapas[1]}}).addTo(map);
	var aerodromo = L.geoJSON(aerodromos, {style: {"fillColor": coloresCapas[2], "color" : coloresCapas[2]}}).addTo(map);
	var helipuerto = L.geoJSON(helipuertos, {style: {"fillColor": coloresCapas[7], "color" : coloresCapas[7]}}).addTo(map);
	var carcel = L.geoJSON(carceles, {style: {"fillColor": coloresCapas[3], "color" : coloresCapas[3]}}).addTo(map);
	var base = L.geoJSON(bases, {style: {"fillColor": coloresCapas[4], "color" : coloresCapas[4]}}).addTo(map);		
	var estacionPolicia = L.geoJSON(estacionesPolicia, {style: {"fillColor": coloresCapas[5], "color" : coloresCapas[5]}}).addTo(map);
	var centroPobladosPol = L.geoJSON(centrosPobladosPol, {style: {"fillColor": coloresCapas[6], "color" : coloresCapas[6]}}).addTo(map);	// var centrosPobladosPto = L.geoJSON(centrosPobladosPto).addTo(map);
	
	//Carga del mapa base
	var mapasbase = {
		'Satelital': arc,
		'Open Street Map': osm
	};

	//Leyenda	
	var overlays = {		
		'<span class="centrosPobladosPol-leyenda"></span>&nbsp; Centros Poblados': centroPobladosPol,
		'<span class="estacionesPolicia-leyenda"></span>&nbsp; Estaciones de Policia': estacionPolicia,
		'<span class="bases-leyenda"></span>&nbsp; Bases Militares': base,
		'<span class="carceles-leyenda"></span>&nbsp; Carceles': carcel,
		'<span class="helipuertos-leyenda"></span>&nbsp; Heliopuertos': helipuerto,
		'<span class="aerodromo-leyenda"></span>&nbsp; Aerodromos': aerodromo,
		'<span class="aeropuertos-leyenda"></span>&nbsp; Aeropuertos': aeropuerto,
		'<span class="fronteras-leyenda"></span>&nbsp; Fronteras': frontera
	};
	
	//Controles para el mapa
    map.addControl(new L.Control.Draw({
        position: 'topleft',
        draw: {
            polygon: {
                allowIntersection: false,
                showArea: true,
				shapeOptions: {
					color: '#97009c'
				}
    		},
			
			polyline: false,
			circle: false, 
			rectangle: false,
			marker: false,
            circlemarker:false
        },
        edit: {
            featureGroup: drawnItems,
            remove: true
        }
	}));
	var layerControl = L.control.layers(mapasbase, overlays,{'drawlayer': drawnItems }).addTo(map);
	
	//Eventos de Draw Polygon
	map.on(L.Draw.Event.CREATED, function (e) {   
		drawlayer = e.layer.toGeoJSON();     
		drawnItems.clearLayers();	
		groupLayerIntersect.clearLayers();	
		drawnItems.addLayer(e.layer);
		map.fitBounds(e.layer.getBounds());
	});

    map.on(L.Draw.Event.EDITED, function (e) {
        var layers = e.layers;
        layers.eachLayer(function (layer) {
            drawlayer = layer.toGeoJSON();  
			groupLayerIntersect.clearLayers();
        });
    });

	map.on('draw:deleted', function (e) {
		groupLayerIntersect.clearLayers();
		drawlayer = undefined;
	});

	//Importar geojson desde el cliente
	function ImportarArchivo(){
		MostrarCargando("btnUpload", "Loading");	
		var fileInput = document.getElementById('inputfiles');
		if (fileInput.files.length > 0){
			filename = fileInput.files.item(0).name;
			var extention = filename.split('.')[1]
      		if (extention === 'geojson') {
				CargarJSON(fileInput);
				fileInput.value = ''; // Clear the input.		
			}
			else{
				MostrarOcultarAlert(false, "#alertInfo", "Por favor, seleccione un archivo GEOJSON para continuar.");        	
				MostrarCargando("Loading", "btnUpload");	
			}	
		}
		else {
			MostrarOcultarAlert(false, "#alertInfo", "Por favor, seleccione un archivo GEOJSON para continuar.");        
			MostrarCargando("Loading", "btnUpload");	
		} 
	}

	//Consulta de Prefactibilidad
	function ConsultarFactibilidad(){
		prefactibilidad = "";
		MostrarCargando("btnConsultar", "Loading");		
		document.getElementById('report').innerHTML="";
		groupLayerIntersect.clearLayers();			
		if(drawlayer !== undefined) {	
			document.getElementById('btnGuardarReporte').style.display = "inline-block";
			document.getElementById('report').innerHTML= "<p>" + normatividad.norma[Object.keys(normatividad.norma).length-3].descripcion + "</p>";		
			prefactibilidad += 	"<ul>";
			IntersectDrawtoLayers(fronteras, drawlayer, 0);
			IntersectDrawtoLayers(bases, drawlayer, 1);
			IntersectDrawtoLayers(carceles, drawlayer, 2);
			IntersectDrawtoLayers(aeropuertos, drawlayer, 3);
			IntersectDrawtoLayers(helipuertos, drawlayer, 4);
			IntersectDrawtoLayers(estacionesPolicia, drawlayer, 5);
			IntersectDrawtoLayers(aerodromos, drawlayer, 6);
			IntersectDrawtoLayers(centrosPobladosPol, drawlayer, 7);
			map.addLayer(groupLayerIntersect);

			prefactibilidad += 	"</ul><p><b>Consideraciones Adicionales</b></p><ul><li>Para mayor información, dirijase a <a href='" + normatividad.norma[Object.keys(normatividad.norma).length-7].descripcion + "'>norma 04201 de 2018 RAC 13</a></li>"+
								"<li>" + normatividad.norma[Object.keys(normatividad.norma).length-6].descripcion + "</li>"+
								"<li>" + normatividad.norma[Object.keys(normatividad.norma).length-5].descripcion + "</li>"+
								"<li>" + normatividad.norma[Object.keys(normatividad.norma).length-4].descripcion + "</li>"+
								"</ul><p><em>" + normatividad.norma[Object.keys(normatividad.norma).length-2].descripcion + "</em></p>";	
			CapturarMapa();				
		}
		else{
			document.getElementById('report').innerHTML= "<p>" + normatividad.norma[Object.keys(normatividad.norma).length-1].descripcion + "</p>";
			MostrarCargando("Loading","btnConsultar");	
			document.getElementById('btnGuardarReporte').style.display = "none";
			$('#reportModal').modal('show');
			
		}
	}
