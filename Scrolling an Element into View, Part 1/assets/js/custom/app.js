$(document).ready(function(){

    $("body")
        .on("click", "#nulla_link", function(e){
            let fourth_item = $("#fourth_item");
            
            $("html, body").animate({
                scrollTop: $(fourth_item).offset().top
            }, 2000);
        })

        .on("click", "#back_to_top_link", function(e){
            
            $("html, body").animate({
                scrollTop: $("body").offset().top
            }, 500);
        })
});