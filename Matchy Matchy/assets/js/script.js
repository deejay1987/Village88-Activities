/* Global variable at the top of the function/file */
let current_img = "";
let current_index = 0;

$(document).ready(function() {
    /* Event listeners should be inside $(document).ready */
    $("body")
        .on("click", ".hidden_img", hiddenImgClick)
        .on("click", "#matchy_game_btn", matchyGameBtnClick)
        // .on("click", "#jumble_match_images", random_item);

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
    /* Possible images */
    let images_content = ["cap", "house", "watch", "baby", "eye", "phone", "sunglasses", "car"];
    let images = [];
    let images_content_clone = [...images_content, ...images_content];

    for(let image_index = 0; image_index < 4; image_index++){
        let empty_obj = {};
        for(let rand_index = (image_index * 4); rand_index < ((image_index + 1) * 4); rand_index++){

            empty_obj[images_content_clone[rand_index]] = "../assets/images/" + images_content_clone[rand_index] + ".jpg";
        }

        /* Randomized matching images */
        // for(let rand_index = 0; rand_index < 4; rand_index++){
        //     let random_image_index = (images_content_clone.length - 1 > 0) ? Math.floor(Math.random() * (images_content_clone.length - 1)) : 0;

        //     /* Makes sure that no two images fall in the same row */
        //     if(empty_obj.hasOwnProperty(images_content_clone[random_image_index])){
        //         random_image_index++;
        //     }
        //     empty_obj[images_content_clone[random_image_index]] = "../assets/images/" + images_content_clone[random_image_index] + ".jpg";
        //     images_content_clone.splice(random_image_index, 1);
        // }
        images.push(empty_obj);
    }
   
    /* Append Matchy Matchy grid images */
    for(let index = 0; index < images.length; index++){
        let table_row = $("<tr></tr>");
        let question_img = "../assets/images/question.jpg";
        let images_obj = images[index];
        // console.log(images_obj);

        for(let images_property in images_obj){
            // console.log(images_property);
            let data_index = current_index++ +1;
            let data_alt_src = images_obj[images_property];
            let data_img = images_property;
            row_data = $("<td><img class='hidden_img' data-img="+ data_img +" src="+ question_img +" data-alt-src="+ data_alt_src +" data-index=" + data_index +"  /></td>");
            
            table_row.append(row_data);
        }
        $("#matchy_table").append(table_row);
    }
}


// function shuffleArray(array){
//     let counter = array.length;

//     /* While there are elements in the array */
//     while (counter > 0) {

//         /* Pick a random index */
//         let random_index = Math.floor(Math.random() * counter);

//         /* Decrease counter by 1 */
//         counter--;

//         /* Swap the last element with it */
//         let temp = array[counter];
//         array[counter] = array[random_index];
//         array[random_index] = temp;
//     }
// };
// shuffleArray(images);
