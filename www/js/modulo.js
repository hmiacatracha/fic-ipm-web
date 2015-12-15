var moduloModule = (function () {

	var principal = {
		nuevoB:document.getElementById("button"),
		spp:document.getElementById("seccion_principal_p"),
		listaP : document.getElementById("lista_pedidor"),				
	};

	var principal_d = {
		listaD: document.getElementById("lista_detalle"),
		spd:document.getElementById("seccion_principal_d"),		

	};

	var secundaria = {
		ssp:document.getElementById("seccion_principal_p"),
		nombreI:document.getElementById("nombreInput"),
		fechaI:document.getElementById("fechaInput"),
		cancelarB:document.getElementById("cancelarButton"),
		aceptarB:document.getElementById("aceptarButton"),
	};


	function init() {
		console.log("init");	
		bindUIActions();		
	};

	function bindUIActions () {
		secundaria.cancelarB.onclick = doCancelar;
		secundaria.aceptarB.onclick = doAceptar;
		/*principal.nuevoB.onclick = doNuevo;*/			
	};

	function doAceptar(){
		console.log("doAceptar");	
		var nombre = secundaria.nombreI.value;	
		var fecha = secundaria.fechaI.value;
			
		if (nombre == "" && fecha == "") {
			alert ("Introduzca los datos del formulario");
		} else if (nombre == "") {
			alert("Introduzca el nombre");
		} else if (fecha == "") {
			alert("Introduzca la fecha");
		}else {
			//añadir los datos
			doLimpiar();
		}

				
	};

	function doLimpiar(){
		console.log("doLimpiar");
		secundaria.ssp.display = 'none';			
		secundaria.fechaI.value = "";
		secundaria.nombreI.value = "";		
	};

	function doNuevo () {
		console.log("doNuevo");	
  		secundaria.ssp.style.display = 'block';
	};

	function doCancelar(){
		console.log("doCancelar");	
		doLimpiar();
	}

    	return {			
		init: init
    	};			
})();

moduloModule.init();


