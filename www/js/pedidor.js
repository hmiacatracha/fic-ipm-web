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
function showSecondarySection () {
    console.log("showSecondarySection");

    var s = document.getElementById('seccion_secundaria');

    // Only clean and show section if is hidden
    if (s.style.display !== 'block') {
        // Resets secondary section form before showing
        document.getElementById('sec_2_form').reset();
    
        console.log("showSecondarySection: displaying secondary section");
        s.style.display = 'block';
    } 

}

// Hide secondary section
function hideSecondarySection () {
    var s = document.getElementById('seccion_secundaria');
    s.style.display = 'none';
}

function addRowSecondarySection(name, date) {
    var lista_pedidor = document.getElementById("lista_pedidor");

    // Created hyperlink, set url and name
    var a = document.createElement('a');
    a.id = "a_detalle";
    a.href = "detalle.html?&name=" + name + "&date=" + date;
    a.innerHTML = name; 

    // Create span set date
    var span = document.createElement('span');
    span.innerHTML = date;
    // TODO span or maybe a element lack some styles

    var li = document.createElement('li');
    li.appendChild(a);
    li.appendChild(span);
    lista_pedidor.appendChild(li);
}


function proccessData () {
    var name = document.getElementById("nombreInput").value;
    var date = document.getElementById("fechaInput" ).value;
    console.log("proccessData: Nombre: " + name);
    console.log("proccessData: Fecha: " + date);

    // Populate ul list from seccion principal
    addRowSecondarySection(name, date);

    // Save data until tab or browser is closed
    window.sessionStorage.setItem("name", name);
    window.sessionStorage.setItem("date", date);
}

function onClickBinds () {
    // set nuevo_btn behaviour: shows secondary section
    var nuevo_btn = document.getElementById("nuevo_btn");
    nuevo_btn.onclick = showSecondarySection;                     

    // set submit_cancelar behaviour: hide secondary section
    var submit_cancelar = document.getElementById("submit_cancelar");
    submit_cancelar.onclick = hideSecondarySection;

    // set submit_aceptar behaviour: populate list items
    var submit_aceptar = document.getElementById("submit_aceptar");
    submit_aceptar.onclick = proccessData;
}

// Flow starts here
hideSecondarySection();
onClickBinds();

