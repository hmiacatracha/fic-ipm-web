var moduloModule = (function () {

	var elemento = 7; 
	var datos = [];

	var principal = {
		nuevoB:document.getElementById("nuevo_btn"),
		spp:document.getElementById("seccion_principal_p"),
		listaP : document.getElementById("lista_pedidor"),				
	};

	var principal_d = {
		listaD: document.getElementById("lista_detalle"),
		spd:document.getElementById("seccion_principal_d"),
		detalle:document.getElementById("detallePedido"),		

	};

	var secundaria = {
		pedidoF:document.getElementsByClassName("pedido"),
		ssp:document.getElementById("seccion_secundaria"),
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
		principal.nuevoB.onclick = doNuevo;			
	};

	function doAceptar(){
		console.log("doAceptar");	
		var nombre = secundaria.nombreI.value;	
		var fecha = secundaria.fechaI.value;

		if (nombre != ""){
			anadirDatos(nombre, fecha);
			//añadir los datos
			doLimpiar();

		} else if (nombre === "") {
			alert("Introduzca el nombre");
			secundaria.nombreI.focus();
			secundaria.ssp.style.display = 'block';
		}				
	};

	function anadirDatos(nombre, fecha){
		
		var lu = principal.listaP;
		var li = document.createElement('li');
		li.id = "elemento-"+ elemento.toString();
		var a = document.createElement('a');
		var spam = document.createElement("spam");

		
		var txt_nombre = document.createTextNode(nombre);
		a.href ="details.html?nombre=" + nombre + "&fecha="+ fecha;
		a.appendChild(txt_nombre);		
		var txt_fecha = document.createTextNode(fecha);		
		spam.appendChild(txt_fecha);

		li.appendChild(a);
		li.appendChild(spam);
		lu.appendChild(li);
		elemento++;
	};

	function cargarDatos(){
		for(var i=7, t=localStorage.length; i < t; i++) {
		    key = localStorage.key(i);
		    //var paramarr = key.split ("&");
		    //var nombre = paramarr
		    anadirDatos(nombre, fecha);
		    localStorage.setItem(elemento, nombre +"&" + fecha);			
		}
	};

	function cargarDatosDetalles(){	
		var detalle_pedido = "Detalle del pedido ";
		var paramstr = location.search.substring(1,location.search.length);
		var paramarr = paramstr.split ("&");
		var params = {};

		for ( var i = 0; i < paramarr.length; i++) {
			var tmparr = paramarr[i].split("=");
			params[tmparr[0]] = tmparr[1];
		    }

		if (params['nombre']) {
			detalle_pedido = detalle_pedido + params['nombre'];
			console.log('El valor del parámetro nombre es: '+params['nombre']);

		} if (params['fecha']){
			detalle_pedido = detalle_pedido + params['fecha'];
			console.log('El valor del parámetro nombre es: '+params['fecha']);
			
		}else {
			console.log('No se envió el parámetro variable');
		}

		principal_d.detalle.value = detalle_pedido; 

	};


	function doLimpiar(){
		console.log("doLimpiar");
		pedidoF.reset();
		secundaria.ssp.style.display="none";
		/*principal.listaP.style.display='block';*/				
	};

	function doNuevo () {
		console.log("doNuevo");	
		/*principal.listaP.style.display="none";*/
  		secundaria.ssp.style.display = 'block';
	};

	function doCancelar(){
		console.log("doCancelar");	
		doLimpiar();
	};
	
    	return {			
	  init: init
    	};			
})();

moduloModule.init();







	
