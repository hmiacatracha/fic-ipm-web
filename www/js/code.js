// var moduloModule = (function () {
// 
//     var principal = {
//             nuevoB:document.getElementById("nuevo_btn"),
//             spp:document.getElementById("seccion_principal_p"),
//             listaP : document.getElementById("lista_pedidor"),                              
//     };
// 
//     var principal_d = {
//             listaD: document.getElementById("lista_detalle"),
//             spd:document.getElementById("seccion_principal_d"),
//             nombre:document.getElementById("detallePedido"),                
// 
//     };
// 
//     var secundaria = {
//             ssp:document.getElementById("seccion_secundaria"),
//             nombreI:document.getElementById("nombreInput"),
//             fechaI:document.getElementById("fechaInput"),
//             aceptarB:document.getElementById("aceptarButton"),
//             cancelarB:document.getElementById("cancelarButton"),
//     };
// 
// 
//     function init() {
//             console.log("init");
//             bindUIActions();                
//     };
// 
//     function bindUIActions () {
//             principal.nuevoB.onclick = doNuevo;                     
//             secundaria.aceptarB.onclick = doAceptar;
//             secundaria.cancelarB.onclick = doCancelar;
//     };
//     function doAceptar(){
//             console.log("doAceptar");       
//             var nombre = secundaria.nombreI.value;  
//             var fecha = secundaria.fechaI.value;
//                     
//             if (nombre == "" && fecha == "") {
//                     alert ("Introduzca los datos del formulario");
//             } else if (nombre == "") {
//                     alert("Introduzca el nombre");
//             } else if (fecha == "") {
//                     alert("Introduzca la fecha");
//             }else {
//                     //añadir los datos
//                     doLimpiar();
//             }
// 
//                             
//     };
// 
//     function doLimpiar(){
//             console.log("doLimpiar");
//             secundaria.ssp.style.display="none";
//             secundaria.fechaI.value = "";
//             secundaria.nombreI.value = "";          
//     };
// 
//     function doNuevo () {
//             console.log("doNuevo"); 
//             secundaria.ssp.style.display = 'block';
//     };
// 
//     function doCancelar(){
//             console.log("doCancelar");      
//             doLimpiar();
//     };
//     
//             return {                        
//       init: init
//             };                      
// })();
// 
// moduloModule.init();

// Show secondary section
function ShowSecondarySection () {
    var s = document.getElementById('seccion_secundaria');
    s.style.display = 'block';
}

// Hide secondary section
function HideSecondarySection () {
    var s = document.getElementById('seccion_secundaria');
    s.style.display = 'none';
}

function onClickBinds () {
    // set nuevo_btn behaviour: shows secondary section
    var nuevo_btn = document.getElementById("nuevo_btn");
    nuevo_btn.onclick = ShowSecondarySection;                     
}

// Flow starts here
HideSecondarySection();
onClickBinds();

