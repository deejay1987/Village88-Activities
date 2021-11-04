$(document).ready(function() {
    $('img').click(function(){
        
        if
            ($(this).attr('src')===$(this).data('atl-src')){
        }
        
        else{
            $(this).attr('src',$(this).data('alt-src'));
        }
     });
     
    document.querySelector('button').addEventListener('click', function(){
        window.location.reload();
        return false;
    });
});
