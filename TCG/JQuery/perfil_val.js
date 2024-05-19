$(document).ready(function(){
    var users = JSON.parse(localStorage.getItem('users'));
    if(users && users.length > 0) {
        var latestUser = users[users.length - 1]; // Obtiene el último usuario registrado
        $('#profile-username').text(latestUser.username);
        $('#profile-email').text('Correo Electrónico: ' + latestUser.email);
        // Agrega más campos aquí si es necesario
    }
});