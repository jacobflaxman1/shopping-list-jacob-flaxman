// $('button').click(function () {
//     $(selector).addClass('shopping-item__checked');
// });

$(document).ready(function(){
    $('#js-shopping-list-form').on('submit', function(e) {
        let text = $('input').val();
        $('.shopping-list').append(`<li>  <span class="shopping-item">${text}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
            <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
            <span class="button-label">delete</span>
        </button>
        </div> </li>`);
        $('input').val();
        $('input').val('');
        e.preventDefault()
    });
})

$(document).on('click', '.shopping-item-delete', function() {
    $(this).closest('li').remove();
    console.log('this works')
});

$(document).on('click', '.shopping-item-toggle', function() {
    $(this).closest('li').toggleClass('shopping-item shopping-item__checked');
    console.log('this works')
});

// $(document).ready().on('click', '.shopping-item-toggle', function() {
//     console.log('this works');
//     $(event.currentTarget).closest('.button-label').toggleClass('shopping-item__checked') 
          
// })