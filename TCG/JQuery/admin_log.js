var email = document.getElementById();
var password = document.getElementById();
var error document.getElementById('Error');
error.style.color = 'red';



function enviarFormulario(){
    console.log('Enviando Formulario....');

    var mensajesError =[];

    if(email.value === null || nombre.value = '' ){
        mensajesError.push('Ingresa tu email')
    }
    if(password.value === null || password.value === '') {
        mensajesError.push('Ingresa tu  password')

    }


    return false;
}