$(document).ready(function() {
    var container_cards = $(".container_cards");
    var current_card = container_cards.filter(".active");

    $("body")
        .on("click", "#next", function() {
            let next_card = current_card.next();

            current_card.removeClass("active");

            if(next_card.length) {
                current_card = next_card.addClass("active");
            }
            else{
                current_card = container_cards.first().addClass("active");
            }
            
        })

        .on("click", "#previous", function() {
            let previous_card = current_card.prev();
           
            current_card.removeClass('active');

            if (previous_card.length) {
                current_card = previous_card.addClass('active');
            }
            else {
                current_card = container_cards.last().addClass('active');
            }
        })
});