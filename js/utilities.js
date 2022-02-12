//Carga y procesa el archivo 
function CargarJSON(fileInput){    
    var reader = new FileReader();// Crea el objeto reader
    if (fileInput.files.length) {
        var textFile = fileInput.files[0];        
        reader.readAsText(textFile);// Lectura del archivo        
        $(reader).on('load', ProcessFile); // Cuando este cargado procesa el archivo
    } else {
        MostrarOcultarAlert(false, "#alertSuccess", "#alertDanger", "Porfavor seleccione un archivo GEOJSON para continuar.");        
    } 
}

//Procesa y carga el json en el mapa 
function ProcessFile(e) {
    var file = e.target.result,
        results;
    if (file && file.length) {
        results = file.split("\n");
        results = file.split("\\");        
        try {
            jsonImported = JSON.parse(results);
            drawlayer = jsonImported["features"];
            drawnItems.clearLayers();	
            var featuresJson = L.geoJSON(drawlayer, {style:{"opacity": 0.5, "color":"#97009c", "fillColor":"#97009c"}}).addTo(map);
            drawnItems.addLayer(featuresJson);
            map.fitBounds(featuresJson.getBounds());
            MostrarOcultarAlert(true, "#alertInfo", filename + " fue cargado con exito.");             
            MostrarCargando("Loading", "btnUpload");	
        } catch(e) {
            MostrarOcultarAlert(false, "#alertInfo", "Ha ocurrido un error al cargar el archivo, verifique que el GEOJSON tenga un formato correcto.");
        }
    }
}

//Muestra u oculta el alert para informar el estado del proceso de importar archivo
function MostrarOcultarAlert(sucess, alertInfo, info){    

    if( sucess ){
        $("div"+alertInfo).removeClass( "alert-danger" ).addClass( "alert-success" ); 
    }
    else{
        $("div"+alertInfo).removeClass( "alert-success" ).addClass( "alert-danger" );         
    }
    $("div"+alertInfo).find("span").remove();     
    $("div"+alertInfo).append("<span>"+ info +"</span>");
    $("div"+alertInfo).show();
}

//Captura en un img el estado actual del mapa para ser incluido en el reporte de prefactibilidad
function CapturarMapa(){
    const $objetivo = document.querySelector("#lienzo"); // Objeto a capturar
			
        html2canvas($objetivo, {allowTaint: true,
		foreignObjectRendering: true}).then(canvas => {
	    imgCanvas = document.createElement('img');
		imgCanvas.width = 450;
		imgCanvas.height = 220;
		imgCanvas.src = canvas.toDataURL();
        imgCanvas.style.display = "block"; 
        imgCanvas.style.marginLeft = "auto";
        imgCanvas.style.marginRight = "auto";

		document.getElementById('report').appendChild(imgCanvas);
        document.getElementById("report").innerHTML += prefactibilidad ;
         MostrarCargando("Loading", "btnConsultar");	
        $('#reportModal').modal('show');
	});
}

// Es necesario navegador actualizado
// Genera un html que llama a la propiedad print del navegador
function ExportarReporte(){
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<html><head><title>"Reporte de Prefactibilidad"</title>	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"></head>');
    mywindow.document.write('<body  style="font-family:Arial"><div style="padding: 100px 70px 70px 50px">');
    mywindow.document.write('<h1 style="color:#2464B0;"> <svg width="32px" height="32px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="drone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-drone fa-w-16"><path fill="currentColor" d="M112 224a110.32 110.32 0 0 0 16.26-1.64l-35.93-49.77a63.82 63.82 0 1 1 80.26-80.26l49.77 35.93A110.45 110.45 0 0 0 224 112a112 112 0 1 0-112 112zM339.41 92.33a63.82 63.82 0 1 1 80.26 80.26l-35.93 49.77A110.32 110.32 0 0 0 400 224a112 112 0 1 0-112-112 110.32 110.32 0 0 0 1.64 16.26zM172.59 419.67a63.82 63.82 0 1 1-80.26-80.26l35.93-49.77A110.32 110.32 0 0 0 112 288a112 112 0 1 0 112 112 110.32 110.32 0 0 0-1.64-16.26zM400 288a110.32 110.32 0 0 0-16.26 1.64l35.93 49.77a63.82 63.82 0 1 1-80.26 80.25l-49.77-35.92A110.32 110.32 0 0 0 288 400a112 112 0 1 0 112-112zm1-144.2a31.91 31.91 0 1 0-32.8-32.8l-67.86 49h-88.68l-67.86-49a31.91 31.91 0 1 0-32.8 32.8l49 67.86v88.68l-49 67.86a31.91 31.91 0 1 0 32.8 32.8l67.86-49h88.68l67.86 49a31.91 31.91 0 1 0 32.8-32.8l-49-67.86v-88.68z" class=""></path></svg> GeoRAC13</h1><hr><h2 style="color:#2464B0;">Reporte de Prefactibilidad</h2>'); 
    mywindow.document.write('<h5 style="color:#4dabf7; font-style: italic;">Generado el '+ ObtenerFechaActual() + ' </h5>'); 
    mywindow.document.write(document.getElementById("report").innerHTML);
    mywindow.document.write('</div></body></html>');
    mywindow.document.close(); 
    mywindow.focus();    
    mywindow.print();    
    mywindow.close();
    return true;
}

//Formatear la fecha actual
function ObtenerFechaActual(){
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    return month + "/" + day + "/" + year;
}

function MostrarCargando(btnOcultar, btnMostrar){
    document.getElementById(btnMostrar).style.display = "inline-block";
	document.getElementById(btnOcultar).style.display = "none";
}




