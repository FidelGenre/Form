// script.js
document.getElementById("myForm").addEventListener("submit", function (event) {
    let valid = true;
    const apellido = document.getElementById("apellido").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const sistema = document.getElementById("sistema").value;

    if (!apellido) {
    alert("El campo 'Apellido' no puede estar vacío.");
    valid = false;
    document.getElementById("apellido").style.borderColor = "red";
    }
    if (!nombre) {
    alert("El campo 'Nombre' no puede estar vacío.");
    valid = false;
    document.getElementById("nombre").style.borderColor = "red";
    }
    if (!validateEmail(email)) {
    alert("Por favor, ingrese un email válido.");
    valid = false;
    document.getElementById("email").style.borderColor = "red";
    }
    if (sistema === "") {
    alert("Seleccione un sistema operativo.");
    valid = false;
    document.getElementById("sistema").style.borderColor = "red";
    }

    if (!valid) {
    event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}