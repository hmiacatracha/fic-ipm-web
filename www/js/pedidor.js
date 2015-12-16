// Show secondary section
function showSecondarySection () {
    console.log("showSecondarySection");

    var s = document.getElementById('seccion_secundaria');

    // Only clean and show section if is hidden
    if (s.style.display !== 'block') {
        // Resets secondary section form before showing
        document.getElementById('sec_2_form').reset();
    
        console.log("showSecondarySection: displaying secondary section");
        s.style.animation = "appear 2s";
        s.style.display='block';
    }
}

// Hide secondary section
function hideSecondarySection () {
    var s = document.getElementById('seccion_secundaria');

    console.log("hideSecondarySection: hiding secondary section");
    s.style.animation = "dissapear 2s";
    s.style.display='none';
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
    // TODO span or maybe a element lack some styles. There is no space between
    // name and date fields. Check if other styles space are afected, like bold
    // appereance or color, etc.

    var li = document.createElement('li');
    li.appendChild(a);
    li.appendChild(span);
    lista_pedidor.appendChild(li);

    // Lastly, clean form
    document.getElementById('sec_2_form').reset();
}

// Proccess user input
function proccessData () {
    var name = document.getElementById("nombreInput").value;
    var date = document.getElementById("fechaInput" ).value;
    console.log("proccessData: Nombre: " + name);
    console.log("proccessData: Fecha: " + date);

    // Populate ul list from seccion principal
    if (name!== "") {
        addRowSecondarySection(name, date);
        // Save data until tab or browser is closed
        data = "{name:" + name + ", date:" + date + "}" // store data as JSON format
        window.sessionStorage.setItem(sessionStorage.length, data); // Use number of elements as key
        console.log("proccessData: localStorage current items: " + sessionStorage.length);
    }

    hideSecondarySection();
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

function reloadData() {
    for(var i=0; i<sessionStorage.length; i++) {

        // Use number of elements as key
        var item = window.sessionStorage.getItem(i);

        // Parse JSON (I know, i'am doing it by hand ;-)
        var a = item.indexOf("name:");
        var b = item.indexOf(", date:");
        var name = item.substring(a + "name:".length, b);
        var date = item.substring(b + ", date: ".length-1, item.length-1);

        console.log("reloadData:" + i + " : " + name + " " + date);
        // TODO characters with accents display uncorrectly on detalle.html

        addRowSecondarySection(name, date);
    }
}

// Flow starts here
onClickBinds();
reloadData();

