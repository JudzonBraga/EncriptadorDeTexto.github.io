function encriptar(){
    let contenido1 = document.getElementById("contenidoEntrada").value.toLowerCase();
    let salida = contenido1.split(""); /*para segmentar el contenido en una lista*/
    for(i=0; salida.length >= i; i++){
        switch(salida[i]){
            case "a": salida[i] = "ai";break;
            case "e": salida[i] = "enter";break;
            case "i": salida[i] = "imes";break;
            case "o": salida[i] = "ober";break;
            case "u": salida[i] = "ufat";break;
        }
    }
    document.getElementById("contenidoSalida").value = salida.join("");
    document.getElementById("contenidoEntrada").value = "";
}

function desencriptar(){    
    let contenido2 = document.getElementById("contenidoEntrada").value.toLowerCase();
    let salida = contenido2.replaceAll("ai","a");
    let salida2 = salida.replaceAll("enter","e");
    let salida3 = salida2.replaceAll("imes","i");
    let salida4 = salida3.replaceAll("ober","o");
    let salida5 = salida4.replaceAll("ufat","u");
    document.getElementById("contenidoSalida").value = salida5;
    document.getElementById("contenidoEntrada").value = "";
}

function copiar(){
    let contenido4 = document.getElementById("contenidoSalida");
    
    contenido4.select();
    contenido4.setSelectionRange(0,0);

    navigator.clipboard.writeText(contenido4.value);
    contenido4.value = "";
}
