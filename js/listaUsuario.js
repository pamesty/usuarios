let idUsuario = ["111", "222", "333", "444"];
let nombreUsuario = ["ANDRES", "JOSE", "CAROLINA", "ANDREA"];
let celularUsuario =["2234454566", "1133457768", "2235467819", "2238779134"];
let emailUsuario = ["andres@hotmail.com", "josemanuel@gmail.com", "carito@gmail.com", "andy@miempresa.com"];
let tabla = document.getElementById("tabla");

let celda = "";
let filaNueva = "";

for (let i=0; i < idUsuario.length; i++) {
    let fila = tabla.insertRow(1);

    fila.insertCell(0).innerHTML = `${idUsuario[i]}`;
    fila.insertCell(1).innerHTML = `${nombreUsuario[i]}`;
    fila.insertCell(2).innerHTML = `${celularUsuario[i]}`;
    fila.insertCell(3).innerHTML = `${emailUsuario[i]}`;
}