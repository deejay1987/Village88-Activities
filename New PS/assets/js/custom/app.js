$(document).ready(function(){
    let count = 0;

    $("body")
        .on("click", ".add_pet_shelter_btn", function(){
            let add_pet_shelter_modal = $("#add_pet_shelter_modal");

            add_pet_shelter_modal.find("input[type='text'], textarea").removeClass("border_red");
            add_pet_shelter_modal.modal("show");
        })

        .on("submit", "#add_pet_form", function(e){
            e.preventDefault();
            let add_pet_form = $(this);
            let add_pet_shelter_modal = $("#add_pet_shelter_modal");
            let pet_id = Math.floor((Math.random() * 1000) + 1);
            let pet_name = add_pet_form.find("#add_petname").val();
            let pet_type = add_pet_form.find("#add_pettype").val();
            let hidden_description = add_pet_form.find("#add_description").val(); 
            
            add_pet_form.find("input[type='text'], textarea").each(function() {
				let input = $(this);
                if(input.val() == "" || input.val().length < 3 ){
                    input.addClass("border_red");
                }
                else{
                    input.removeClass("border_red");
                }
            });

            if(add_pet_form.find("input[type='text'], textarea").hasClass("border_red") === false){
                $("#add_pet_section").prepend(
                    "<tr data-pet-id=' " + pet_id + " '>" + `
                        <td class="pet_name">`+ pet_name +`</td>
                        <td class="pet_type">` + pet_type + `</td>
                        <td class="hidden_description">` + hidden_description + `</td>
                        <td>
                            <button type="button" class="details_pet_btn">
                                <img src="../assets/images/details.png" alt="Details Icon">
                                Details
                            </button>
                        </td>
                        <td>
                            <button type="button" class="edit_pet_btn" >
                                <img src="../assets/images/edit.png" alt=" Edit Icon">
                                Edit
                            </button>
                        </td>
                   </tr>`
                   );
                   add_pet_shelter_modal.modal("hide");
                   add_pet_form[0].reset();
               }
               return false; 

        })

        .on("click", ".details_pet_btn", function(){
            let pet_details = $(this).closest("tr");
            let pet_details_modal = $("#pet_details_modal");

            pet_details_modal.find(".details_about").html("Details about: " + pet_details.find(".pet_name").text());
            pet_details_modal.find("#pet_type_details").html(pet_details.find(".pet_type").text());
            pet_details_modal.find("#description_details").html(pet_details.find(".hidden_description").text());

            pet_details_modal.find("#like_pet_btn").html("Like " + pet_details.find(".pet_name").text());
            pet_details_modal.find("#adopt_pet_btn").html("Adopt " + pet_details.find(".pet_name").text());

            pet_details_modal.modal("show");
        })

        // .on("click", "#like_pet_btn", function(){
        //     count++;

        //     if(count === 1) {
        //         $("#total_likes").html("1 Like");
        //     }
        //     else {
        //         $("#total_likes").html(count + " Likes");
        //     }
        // })

        // .on("click", "#adopt_pet_btn", function(){
        //     let adopt_pet = $(this);

        //     $("#add_pet_section tr[data-pet-id=" + adopt_pet.closest("#details_pet_table") + "]").remove();

        //     adopt_pet.closest("#pet_details_modal").modal("hide");
        // })

        .on("click", ".edit_pet_btn", function(){
            let edit_pet_modal = $("#edit_pet_modal");
            let edit_pet_btn = $(this).closest("tr");

            edit_pet_modal.find(".edit_pet_name").html("Edit Details: " + edit_pet_btn.find(".pet_name").text());

            edit_pet_modal.find("#edit_pettype").data("pet-id", edit_pet_btn.data("pet-id")).val(edit_pet_btn.find(".pet_type").text());
            edit_pet_modal.find("#edit_description").data("pet-id", edit_pet_btn.data("pet-id")).val(edit_pet_btn.find(".hidden_description").text());

            edit_pet_modal.modal("show");
        })

        // .on("submit", "#edit_pet_form", function(e){
        //     e.preventDefault();
        //     let edit_pet_form = $(this);
        //     let edit_pet_modal = edit_pet_form.closest("#edit_pet_modal");

        //     edit_pet_form.find("input[type='text'], textarea").each(function() {
		// 		let input = $(this);
        //         if(input.val() == "" || input.val().length < 3 ){
        //             input.addClass("border_red");
        //         }
        //         else{
        //             input.removeClass("border_red");
        //         }
        //     });

        //     edit_pet_modal.modal("hide");
        // })
});