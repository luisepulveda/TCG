$(document).ready(function(){
 $('#Contenido').validate({
  rules: {
    username: {
        required: true,
        minlength: 5
    },
    email: {
        required: true,
        minlength: true,
        type: true
    },
    password: {
        required: true,
        minlength: 8
    }
  },
  messages: {
    username: {
    
        required:"porfavor, introduzca el nombre",
        minlength:"Debe tener un minimo de 5 caracteres"
    },
    email: {
        required:"porfavor, introduzca el correo",
        minlength:"Debe ser un correo valido",
        type:"Debe ser un correo valido"
    },
    password: {
        required:"porfavor, introduzca la contraseña",
        minlength:"Debe tener un minimo de 8 caracteres"
    },
   submitHandler:function(form){
    addUser();
    form.reset();
    return false;
   }

  }     
 });

loadUser();


});

function addUser(){
    var username = $('username').val();
    var email = $('email').val();
    var password = $('password').val();
    var user = { username,email,password}

    saveUser();
    loadUser();

};



function saveUser(user){
    var users = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    users.push(user);
    localStorage.setItem('user',JSON.stringify(users));
    
}

function loadUser(){
    if(loadUser.getItem('user')){
        var users = JSON.parse(localStorage.getItem('user'));
        
    }
}