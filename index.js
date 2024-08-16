

$(document).ready(function() {
    // Populate the grid with 16 boxes
    for (let i = 0; i < 16; i++) {
        $('#grid-container').append('<div class="grid-box"></div>');
    }

    // Handle box click event
    $('.grid-box').on('click', function() {
        let currentColor = $(this).css('background-color');
        let newColor = currentColor === 'rgb(0, 0, 0)' ? 'gray' : 'black';
        $(this).css('background-color', newColor);
    });
});