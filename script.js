let contadorSaludos = 0;

function saludar(){

    let nombre = document.getElementById("nombre").value;
    let resultado = document.getElementById("resultado");

    if(nombre.trim() === ""){
        resultado.innerText = "Por favor ingrese un nombre.";
        resultado.style.color = "red";
        return;
    }

    contadorSaludos++;

    resultado.innerText =
        "Hola " + nombre +
        ". Bienvenido al sistema. " +
        "Saludos realizados: " + contadorSaludos;

    resultado.style.color = "green";
}

function validarCorreo() {
    let correo = document.getElementById("correo").value;
    if (correo === "") {
    document.getElementById("mensajeCorreo").innerText = "Debe ingresar un correo.";
    } else {
    document.getElementById("mensajeCorreo").innerText = "Correo registrado correctamente.";
    }
}

function cambiarTema(){
    document.body.classList.toggle("dark-mode");
}