/*
Debe tener un menú que permita realizar las siguientes operaciones (con su respectivo flujo):

Buscar un usuario:
Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email.A continuación debe pedir ingresar el valor que se va 
a buscar. 
Si el usuario existe debe mostrar la información del usuario con todos sus datos.
Si el usuario no existe debe mostrar un mensaje informándolo.A continuación debe pedir si se desea realizar nuevamente el procedimiento: 
Si la respuesta es afirmativa, debe volver a realizar el procedimiento.
Si la respuesta es negativa, debe llevar al menú de operaciones

Listar todos los usuarios:
Debe mostrar un listado con todos los usuarios y todos sus datos: 
Id
Nombre
Teléfono
Email
Luego debe llevar al menú de operaciones.

Salir del programa:
Debe preguntar si desea confirmar la operación:
Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa.
Si la respuesta es negativa debe volver al menú de operaciones.
Todos los mensajes que se requieran son libres (pueden poner lo que mejor les parezca). 
Se deben validar los datos que se ingresan. Por ejemplo, si en vez de ingresar un número de celular se ingresa un dato no válido, 
como una palabra. Si se ingresa una opción incorrecta, el programa nos debe avisar del hecho, 
y debe tomar una acción por defecto (por ejemplo, volver al menú).
*/
let idUsuario = ["111", "222", "333", "444"];
let nombreUsuario = ["ANDRES", "JOSE", "CAROLINA", "ANDREA"];
let celularUsuario =["2234454566", "1133457768", "2235467819", "2238779134"];
let emailUsuario = ["andres@hotmail.com", "josemanuel@gmail.com", "carito@gmail.com", "andy@miempresa.com"];

const $eventoBoton = document.getElementById("idBoton");
let indexSelect = document.getElementById("buscar").value;
let dato = "";
let idBandera = false;
let nombreBandera = false;
let celularBandera = false;
let emailBandera = false;


function funcionSeleccionado() {
    /* Para obtener el valor */
    indexSelect = document.getElementById("buscar").value;
 
    /* Para obtener el texto */
    //combo = document.getElementById("buscar");
    //selected = combo.options[combo.selectedIndex].text;
    //console.log(selected);
}

$eventoBoton.addEventListener("click", () => {
    buscandoDatos();
});

const buscandoDatos = () => {
    dato = document.getElementById("dato").value;

    switch (indexSelect) {
        case "id":        
            for (let i = 0; i < idUsuario.length; i++) {
                if (dato === idUsuario[i]) {
                    document.getElementById("divId").innerHTML = `El ID del usuario buscado es: ${idUsuario[i]}.`;
                    document.getElementById("divNombre").innerHTML = `El Nombre del usuario buscado es: ${nombreUsuario[i]}.`;
                    document.getElementById("divCelular").innerHTML = `El Celular del usuario buscado es: ${celularUsuario[i]}.`;
                    document.getElementById("divEmail").innerHTML =`El Email del usuario buscado es: ${emailUsuario[i]}.`;
                    idBandera = true;
                    return;
                }
            }
            break;

        case "nombre":
            dato = dato.toUpperCase();
            for (let i = 0; i < nombreUsuario.length; i++) {
                if (dato === nombreUsuario[i]) {
                    document.getElementById("divId").innerHTML = `El ID del usuario buscado es: ${idUsuario[i]}.`;
                    document.getElementById("divNombre").innerHTML = `El Nombre del usuario buscado es: ${nombreUsuario[i]}.`;
                    document.getElementById("divCelular").innerHTML = `El Celular del usuario buscado es: ${celularUsuario[i]}.`;
                    document.getElementById("divEmail").innerHTML =`El Email del usuario buscado es: ${emailUsuario[i]}.`;
                    nombreBandera = true;
                    return;
                }
            }
            break;

        case "celular":
            for (let i = 0; i < celularUsuario.length; i++) {
                if (dato === celularUsuario[i]) {
                    document.getElementById("divId").innerHTML = `El ID del usuario buscado es: ${idUsuario[i]}.`;
                    document.getElementById("divNombre").innerHTML = `El Nombre del usuario buscado es: ${nombreUsuario[i]}.`;
                    document.getElementById("divCelular").innerHTML = `El Celular del usuario buscado es: ${celularUsuario[i]}.`;
                    document.getElementById("divEmail").innerHTML =`El Email del usuario buscado es: ${emailUsuario[i]}.`;
                    celularBandera = true;
                    return;
                }
            }
            break;

        case "email":
            for (let i = 0; i < emailUsuario.length; i++) {
                if (dato === emailUsuario[i]) {
                    document.getElementById("divId").innerHTML = `El ID del usuario buscado es: ${idUsuario[i]}.`;
                    document.getElementById("divNombre").innerHTML = `El Nombre del usuario buscado es: ${nombreUsuario[i]}.`;
                    document.getElementById("divCelular").innerHTML = `El Celular del usuario buscado es: ${celularUsuario[i]}.`;
                    document.getElementById("divEmail").innerHTML =`El Email del usuario buscado es: ${emailUsuario[i]}.`;
                    emailUsuario = true;
                    return;
                }
            }
            break;
    
        default:
            break;
    }

    if (idBandera === false || nombreBandera === false || celularBandera === false || emailBandera === false) {
        let confirmacion = confirm(`El usuario no existe, desea buscar de nuevo?`);
        if (confirmacion) {
            location.href="buscarUsuario.html";
        } else {
            location.href="index.html";
        }
        idBandera = false;
        nombreBandera = false;
        celularBandera = false;
        emailBandera = false;
    }
}