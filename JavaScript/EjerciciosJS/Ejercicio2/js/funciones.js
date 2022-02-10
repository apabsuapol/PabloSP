function iniciar() {
    var titulo = document.getElementById("titulo");
    var mensaje = document.getElementById("texto");

    var capa = document.getElementById("capa");
    if (capa.classList.contains("success")) {
        titulo.innerHTML = "AVISO";
        mensaje.innerHTML = "Tenga cuidado";
    } else if (capa.classList.contains("error")) {
        titulo.innerHTML = "ERROR";
        mensaje.innerHTML = "Ha surgido un error";
    } else if (capa.classList.contains("warning")) {
        titulo.innerHTML = "CORRECTO";
        mensaje.innerHTML = "Los datos son correctos";
    }
}

window.addEventListener("load",iniciar,false);