// Retrieve current URL, look for item name on it and set detalle h3 accordingly.
function setItemName () {
    var detaultStr = "Detalle del pedido: ";
    var url = window.location.href; // Current URL
    var detalle_pedido =  document.getElementById("detalle_pedido" ); // h3 header

    var nameStart = url.indexOf("&name=");
    var nameEnd = url.indexOf("&date=");
    var item = url.substring(nameStart + "&name=".length, nameEnd);
    var date = url.substring(nameEnd + "&date=".length, url.length);
    var name = item.replace(new RegExp("%20", 'g'), " "); // replace white space instead of %20
    if (date.length > 0) {
	    detalle_pedido.innerHTML = detaultStr + name + " <br> Fecha: " + date;
    }else{
	detalle_pedido.innerHTML = detaultStr + name;
    }
}
window.onload = setItemName;

