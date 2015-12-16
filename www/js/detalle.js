// Retrieve current URL, look for item name on it and set detalle h3 accordingly.
function setItemName () {
    var detaultStr = "Detalle del pedido ";
    var url = window.location.href; // Current URL
    var detalle_pedido =  document.getElementById("detalle_pedido" ); // h3 header

    var posStart = url.indexOf("&name=");
    var posEnd = url.indexOf("&date=");
    var item = url.substring(posStart + "&name=".length, posEnd);
    detalle_pedido.innerHTML = detaultStr + item;
}

window.onload = setItemName;
