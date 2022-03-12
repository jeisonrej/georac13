
<!DOCTYPE html>
<html>
<head>
	
	<title>GeoRAC13</title>

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico" />		
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.css"/>
	<link href="js/fontawesome/css/all.css" rel="stylesheet">
	<link rel="stylesheet" href="css/leaflet_css.css"/>
	<link rel="stylesheet" href="css/style.css"/>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
	<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/leaflet.draw.js"></script>
    <script src="js/turf.js"></script> <!--LIBRERIA PARA INTERSECCIÓN-->
	<script src="https://openlayers.org/en/v5.3.0/build/ol.js"></script> 	
	<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.1/dist/html2canvas.min.js"></script>
	<script src="js/analyzeTool.js"></script>
	<script src="js/utilities.js"></script>
	
	<!-- LAYERS -->
	<script src="geojson/bases.js"></script>
	<script src="geojson/Fronteras.js"></script>  
	<script src="geojson/aerodromos.js"></script>  
	<script src="geojson/aeropuertos.js"></script>  
	<script src="geojson/carceles.js"></script>  
	<script src="geojson/centrosPobladosPol.js"></script>  
	<script src="geojson/centrosPobladosPto.js"></script>  
	<script src="geojson/estacionesPolicia.js"></script>  
	<script src="geojson/helipuertos.js"></script>  
	<script src="js/normativa.js"></script>
	<style>
		html, body {
			margin: 0;    height: 100%;
}

#map {
    height: 100%;
		}
	</style>

	
</head>
<body>	
		<nav class="navbar navbar-dark navbar-expand-lg banner">
			<a class="navbar-brand" href="#">				
				<svg width="28px" height="28px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="drone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-drone fa-w-16"><path fill="currentColor" d="M112 224a110.32 110.32 0 0 0 16.26-1.64l-35.93-49.77a63.82 63.82 0 1 1 80.26-80.26l49.77 35.93A110.45 110.45 0 0 0 224 112a112 112 0 1 0-112 112zM339.41 92.33a63.82 63.82 0 1 1 80.26 80.26l-35.93 49.77A110.32 110.32 0 0 0 400 224a112 112 0 1 0-112-112 110.32 110.32 0 0 0 1.64 16.26zM172.59 419.67a63.82 63.82 0 1 1-80.26-80.26l35.93-49.77A110.32 110.32 0 0 0 112 288a112 112 0 1 0 112 112 110.32 110.32 0 0 0-1.64-16.26zM400 288a110.32 110.32 0 0 0-16.26 1.64l35.93 49.77a63.82 63.82 0 1 1-80.26 80.25l-49.77-35.92A110.32 110.32 0 0 0 288 400a112 112 0 1 0 112-112zm1-144.2a31.91 31.91 0 1 0-32.8-32.8l-67.86 49h-88.68l-67.86-49a31.91 31.91 0 1 0-32.8 32.8l49 67.86v88.68l-49 67.86a31.91 31.91 0 1 0 32.8 32.8l67.86-49h88.68l67.86 49a31.91 31.91 0 1 0 32.8-32.8l-49-67.86v-88.68z" class=""></path></svg>
				GeoRAC13
			  </a>
			  
			  <div class="container-fluid">
				  <ul class="navbar-nav">
					<li class="nav-item">					
					  <button class="btn btn-primary btnNavBar" id="btnUpload" type="button" data-bs-toggle="modal" data-bs-target="#uploadFileModal" onclick="document.getElementById('alertInfo').style.display='none';"><i class="fas fa-upload"></i> Importar</button>					  
					</li>
					<li class="nav-item">
						<button id="Loading" class="btn btn-primary btnNavBar" type="button" style="display: none;" disabled>
							<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
							Loading...
						</button>
						<button id="btnConsultar" class="btn btn-primary btnNavBar" type="button" onclick="ConsultarFactibilidad()"><i class="fas fa-search-location"></i> Consultar</button>
					</li>
				  </ul>
				</div>
		  </nav>
		  <div id="lienzo">
			  <div id='map' style="position:relative"></div>
		  </div>		

		<script src="js/main.js"></script>
				
<!-- Modal para Reporte -->
<div class="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalTitle" aria-hidden="true" data-bs-backdrop="false">
	<div class="modal-dialog modal-dialog-scrollable">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="reportModalTitle">Reporte de Prefactibilidad</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
		  </button>
		</div>
		<div class="modal-body" id="report">
		</div>
		<div class="modal-footer">
		  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
		  <button id="btnGuardarReporte" type="button" class="btn btn-primary" onclick="ExportarReporte()">Guardar Reporte</button>
		</div>
	  </div>
	</div>
  </div>

  <!-- Modal para seleccionar e importar archivo GeoJson -->
  <div class="modal fade" id="uploadFileModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="false">
	<div class="modal-dialog modal-dialog-scrollable">
	  <div class="modal-content">
		<div class="modal-header">
		  <h5 class="modal-title" id="reportModalTitle">Cargar Archivo</h5>
		  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
		  </button>
		</div>
		<div class="modal-body">
			<div class="alert fade show" role="alert" id="alertInfo" style="display:none">
				<span></span>
			</div>
			<p>Seleccione el archivo json que contiene el polígono de estudio.</p>
			<div class="input-group">
				<input type="file" class="form-control" id="inputfiles" accept=".geojson" aria-describedby="inputfiles" aria-label="Upload">
				<button class="btn btn-primary" type="button" id="btnCargar" onclick="ImportarArchivo()">Cargar</button>				
			  </div>			  
		</div>
	  </div>
	</div>
  </div>
</body>
</html>


