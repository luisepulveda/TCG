$(document).ready(function() {
    $('#add-note-btn').click(function() {
        var newNoteDiv = '<div class="mb-3"><label for="nota' + 
        (parseInt($('.additional-notes div').length) + 1) + 
        '" class="form-label">Nota ' + 
        (parseInt($('.additional-notes div').length) + 1) + 
        ':</label><input type="number" class="form-control" id="nota'+ 
        (parseInt($('.additional-notes div').length) + 1) + 
        '" min="0" max="100" required></div>';
          
        $('.additional-notes').append(newNoteDiv);
    });

    $('#delete-note').click(function(){
            $('.additional-notes div:last-child').remove();
        });
    $('#calculator-form').validate({
        rules:{
            nota1:{
                required:true,
                min:20,
                max:70
            },
            nota2:{
                required:true,
                min:20,
                max:70
            },
            nota3:{
                required:true,
                min:20,
                max:70
            },
            nota4:{
                required:true,
                min:20,
                max:70
            },
            nota5:{
                required:true,
                min:20,
                max:70
            },
            nota6:{
                required:true,
                min:20,
                max:70
            },
            nota7:{
                required:true,
                min:20,
                max:70
            },
            nota8:{
                required:true,
                min:20,
                max:70
            },
            nota9:{
                required:true,
                min:20,
                max:70
            }
        },
        messages: {
            nota1:
            requared
        }
    });
});