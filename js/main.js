const $eventoBoton = document.getElementById("salir");

$eventoBoton.addEventListener("click", () => {
    let salidaDelSistema = confirm("Desea salir del sistema?");
    
    if (salidaDelSistema) {
        alert("Gracias por la visita!!");
        location.href ="http://www.google.com";
    }
});