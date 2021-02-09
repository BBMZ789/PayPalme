$("#mymodal").on('click', function(){
    var $btn = $(this).button('mymessage-btn');
    //Logic 
    setTimeout(function(){
        $btn.button('closing')
    }, 4000);
});
$(function(){
    $('[data-toggle="popover"]').popover();
})

