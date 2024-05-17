var email = document.getElementById('email');
var password = document.getElementById('password');
var error = document.getElementById('Error');
error.style.color = 'red';

function enviarFormulario() {
    console.log('Enviando Formulario....');

    var mensajesError = [];

    if (email.value === null || email.value === '') { // Corrige el nombre de la variable
        mensajesError.push('Ingresa tu email');
    }
    if (password.value === null || password.value === '') {
        mensajesError.push('Ingresa tu password');
    }

    return false;
}
