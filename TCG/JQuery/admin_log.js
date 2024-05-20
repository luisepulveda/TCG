$(document).ready(function() {
    $('formulario').validate({
        rules:{
            email:{
                required:true,
                email: true,
                minlength: 1
            },
            password:{
                required:true,
                minlength: 8
            }
        },
        messages: {
            email :{
            required:"El campo no debe estar vacio",
            email:"debe ser un correo con formato"
            }
        }    
    });
});