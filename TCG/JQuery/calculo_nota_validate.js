$(document).ready(function() {
    $('#add-note-btn').click(function() {
        var newNoteDiv = '<div class="mb-3"><label for="nota' + 
        (parseInt($('.additional-notes div').length) + 1) + 
        '" class="form-label">Nota ' + 
        (parseInt($('.additional-notes div').length) + 1) + 
        ':</label><input type="number" class="form-control" id="nota' + 
        (parseInt($('.additional-notes div').length) + 1) + 
        '" min="0" max="100" required></div>';
          
        $('.additional-notes').append(newNoteDiv);
    });
});