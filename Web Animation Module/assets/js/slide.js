$(document).ready(function(){

    $("body")
        .on("click", "#roundButton", function(){
            let flyout_menu = $("#flyoutMenu");
           
            flyout_menu.addClass("show");

            flyout_menu.setTimeout(() => {
                2000}, timeout);
        })

        .on("click", "#flyoutMenu", function(e){
            e.stopPropagation();
            let flyout_menu = $("#flyoutMenu");
           
            flyout_menu.removeClass("show");
        })

        .on("click", "#nulla_link", function(){
            let fourth_item = $("#fourth_item");
            
            $("html, body").animate({
                scrollTop: $(fourth_item).offset().top
            }, 2000);
        })

        .on("click", "#back_to_top_link", function(){
            
            $("html, body").animate({
                scrollTop: $("body").offset().top
            }, 500);
        })
})