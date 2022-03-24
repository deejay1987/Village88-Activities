/* Global variable at the top of the function/file */
let current_img = "";
let current_index = 0;

$(document).ready(function() {
    /* Event listeners should be inside $(document).ready */
    $("body")
        .on("click", ".hidden_img", hiddenImgClick)
        .on("click", "#matchy_game_btn", matchyGameBtnClick)
        // .on("click", "#jumble_match_images", jumbleMatchImages);

        /* How to name your event handler function
        step 1: Target element + event type
        step 2: Convert function name to code guideline function name
        step 3: Use function name
        */
});

/* Event handlers should be after $(document).ready */
function hiddenImgClick() {
    let hidden_img = $(this);
    let data_img = hidden_img.attr("data-img");
    let data_index = hidden_img.attr("data-index");
    let data_alt_src = hidden_img.attr("data-alt-src");
    let src = hidden_img.attr("src");

    hidden_img.attr("src", data_alt_src);
    hidden_img.attr("data-alt-src", src);

    /*if user did not click the same card*/
    if(current_index != data_index){
        hidden_img.addClass("open");

        /*click a card for the first time*/
        if(current_img == ""){
            current_img = data_img;
            current_index = data_index;
        }
        else{
            /*compare clicked cards*/
            if(current_img == data_img){
                /*remove class hidden_img of matching cards*/
                $(".open").removeClass("open");
                /*select all cards with data_img value of matching image, and remove class .hidden_img*/
                $(".hidden_img[data-img='"+data_img+"']").removeClass("hidden_img");
            }
            else{
                /*return open cards to default images, after 500ms*/
                setTimeout(function(){
                    /*remove class .open of opened cards*/
                    $(".open").each(function(){
                        let open_card = $(this);
                        let open_data_alt_src = open_card.attr("data-alt-src");
                        let open_src = open_card.attr("src");

                        open_card.attr("src", open_data_alt_src);
                        open_card.attr("data-alt-src", open_src);
                        open_card.removeClass("open");
                    });
                }, 500);
            }
            
            /*reset current selected card*/
            current_img = "";
            current_index = "0";
        }
    }
    else{
        /*when clicked again, remove class .open*/
        hidden_img.removeClass("open");
    }
}
function matchyGameBtnClick(){
    let images = [
                    {
                    "cap"   : "../assets/images/cap.jfif",
                    "house" : "../assets/images/house.jpg",
                    "watch" : "../assets/images/watch.jpg",
                    "baby"  : "../assets/images/baby.jpg",
                    },

                    {
                    "cap"   : "../assets/images/cap.jfif",
                    "eye"   : "../assets/images/eye.jpg",
                    "phone" : "../assets/images/phone.jpg",
                    "baby"  : "../assets/images/baby.jpg",
                    },

                    {
                    "sunglasses": "../assets/images/sunglasses.jpg",
                    "car"       : "../assets/images/car.jpg",
                    "eye"       : "../assets/images/eye.jpg",
                    "house"     : "../assets/images/house.jpg",
                    },

                    {
                    "sunglasses": "../assets/images/sunglasses.jpg",
                    "car"       : "../assets/images/car.jpg",
                    "watch"     : "../assets/images/watch.jpg",
                    "phone"     : "../assets/images/phone.jpg"
                    }
                ];

    for(let index = 0; index < images.length; index++){
        let table_row = $("<tr></tr>");
        let question_img = "../assets/images/question.jpg";
        let images_obj = images[index];

        for(let images_property in images_obj){
            let data_index = current_index++ +1;
            let data_alt_src = images_obj[images_property];
            let data_img = images_property;
            row_data = $("<td><img class='hidden_img' data-img="+ data_img +" src="+ question_img +" data-alt-src="+ data_alt_src +" data-index=" + data_index +"  /></td>");
            
            table_row.append(row_data);
        }
        /* To randomize images */
        for (let jumble_images = images.length - 1; jumble_images > 1; jumble_images--) {
            let random_images = Math.floor(Math.random() * (jumble_images + 1));
            let temp = images[jumble_images];
    
            images[jumble_images] = images[random_images];
            images[random_images] = temp;
        }

        $("#matchy_table").append(table_row);
    }
}