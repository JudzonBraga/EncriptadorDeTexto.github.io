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
    validar(contenido1);
    document.getElementById("contenidoSalida").value = salida.join("");
    document.getElementById("contenidoEntrada").value = "";
    document.getElementById("botonCopiar").style.display = "inline";
    document.getElementById("imagen_cont3").style.display = "none";
    document.getElementById("h5_cont3").style.display = "none";
    document.getElementById("p_cont3").style.display = "none";
}

function desencriptar(){    
    let contenido2 = document.getElementById("contenidoEntrada").value.toLowerCase();
    ///buscas el ai, si devuelve true recien remplaza
    let salida = contenido2.replaceAll("ai","a");
    let salida2 = salida.replaceAll("enter","e");
    let salida3 = salida2.replaceAll("imes","i");
    let salida4 = salida3.replaceAll("ober","o");
    let salida5 = salida4.replaceAll("ufat","u");
    validar(contenido2);
    document.getElementById("contenidoSalida").value = salida5;
    document.getElementById("contenidoEntrada").value = "";
    document.getElementById("botonCopiar").style.display = "inline";
    document.getElementById("imagen_cont3").style.display = "none";
    document.getElementById("h5_cont3").style.display = "none";
    document.getElementById("p_cont3").style.display = "none";
}

function copiar(){
    let contenido4 = document.getElementById("contenidoSalida");
    contenido4.select();
    contenido4.setSelectionRange(0,100);
    navigator.clipboard.writeText(contenido4.value);
}

function barrer(){
    document.getElementById("contenidoEntrada").value = "";
    document.getElementById("contenidoSalida").value = "";
    document.getElementById("imagen_cont3").style.display = "inline";
    document.getElementById("h5_cont3").style.display = "inline";
    document.getElementById("p_cont3").style.display = "inline";
    document.getElementById("botonCopiar").style.display = "none";
}

function validar(dato){
    if(dato == ""){
        alert("No se detecto ningun mensaje, intentalo nuevamente");
        location.reload();
    }
}
