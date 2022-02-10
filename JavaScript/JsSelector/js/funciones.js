function iniciar() {
    /*alert(document.getElementById("usuario").value);
    var usu = prompt("Introduzca nombre:")
    alert("hola " + usu + " pedazo guarra");*/
    /*var usu = prompt("Introduzca nombre:")
    document.getElementById("texto").innerHTML = "Hola " + usu + "<br/>";
    document.getElementById("texto").style = "font-weight: bold";*/

    /*var radios = document.getElementsByName("valores");
    for (let i = 0; i < radios.length; i++) {
        alert(radios[i].value);
    }*/

    //document.getElementsByTagName("p")[0].innerHTML = "Primer Parrafo";
    //document.getElementsByTagName("p")[0].onclick = mostrarMensaje;

    //document.getElementsByClassName("clase")[1].onclick = mostrar("pulsado");
    //document.querySelector("#principal p:first-child").onclick = alerta;
    var coleccion = document.querySelectorAll("#principal p");
    var colección = document.getElementById("principal") .querySelectorAll("p");
    for (let i = 0; i < coleccion.length; i++) {
        coleccion[i].innerHTML = "array" + (i+1);        
    }
}

function alerta() {
    alert("ALERTA")
}

function mostrarMensaje() {
    document.getElementById("texto").innerHTML = "Hola ";
    document.getElementById("texto").className = "bordeYcolor";
}

function ocultar() {
    document.getElementById("principal").style = "display: none";
}

function mostrar() {
    document.getElementById("principal").style = "display: block";
}



window.addEventListener("load",iniciar,false);