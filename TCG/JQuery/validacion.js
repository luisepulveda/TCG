$(document).ready(function(){
$('#contenido').validate({
    rules: {

        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8
        }
    },
    messages: {
        
        email: {
            required: "Por favor ingrese su email",
            email: "Por favor ingrese un email valido"
        },
        password: {
            required: "Por favor ingrese su contraseña",
            minlength: "Por favor ingrese al menos 8 caracteres"
        },
        submitHandler: function(form) {
            addProduct();
            form.reset();
            return false;
        }
    }
});




});