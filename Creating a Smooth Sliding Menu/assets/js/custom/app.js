$(document).ready(function(){

    $("body")
        .on("click", "#roundButton", function(e){
            let flyoutMenu = $("#flyoutMenu");
           
            flyoutMenu.addClass("show");
        })

        .on("click", "#flyoutMenu", function(e){
            e.stopPropagation();
            let flyoutMenu = $("#flyoutMenu");
           
            flyoutMenu.removeClass("show");
        })
});