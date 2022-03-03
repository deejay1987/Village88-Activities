$(document).ready(function(){

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
            let add_pet_id = Math.floor((Math.random() * 10000));
            let add_pet_name = add_pet_form.find("#add_petname").val();
            let add_pet_type = add_pet_form.find("#add_pettype").val();
            let hidden_description = add_pet_form.find("#add_description").val();
            let skill_1 = add_pet_form.find("#add_skill_0").val();
            let skill_2 = add_pet_form.find("#add_skill_1").val();
            let skill_3 = add_pet_form.find("#add_skill_2").val();
            
            add_pet_form.find("input[type='text'], textarea").each(function() {
				let input = $(this);
                if(input.val() == "" || input.val().length < 3 ){
                    input.addClass("border_red");
                }
                else{
                    input.removeClass("border_red");
                }
            });
            let skills = [`"${skill_1}"`, `"${skill_2}"`, `"${skill_3}"`];

            if(add_pet_form.find("input[type='text'], textarea").hasClass("border_red") === false){
                $("#add_pet_section").prepend(
                    "<tr data-pet-id='" + add_pet_id + "' data-like='"+ 0 +"' data-is-liked='false' data-skills='[" + skills +"]'>" + `
                        <td class="pet_name">`+ add_pet_name +`</td>
                        <td class="pet_type">` + add_pet_type + `</td>
                        <td class="hidden_description">` + hidden_description + `</td>
                        <td class="details_btn">
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
            let pet_name = pet_details.find(".pet_name").text();
            let pet_skills = pet_details.data("skills");

            pet_details_modal.find(".details_about").html("Details about: " + pet_name);
            pet_details_modal.find("#pet_type_details").html(pet_details.find(".pet_type").text());
            pet_details_modal.find("#description_details").html(pet_details.find(".hidden_description").text());

            $.each(pet_skills, function(index, value) {
                pet_details_modal.find(".skill_" + index).text(value);
            });

            pet_details_modal.find("#like_pet_btn").html("Like " + pet_name);
            pet_details_modal.find("#adopt_pet_btn").html("Adopt " + pet_name);

            pet_details_modal.find("#total_likes").html(pet_details.attr("data-like") + " Like");
            pet_details_modal.find("#is_like_pet").val(pet_details.attr("data-is-liked"));
            pet_details_modal.find("#pet_id").val(pet_details.attr("data-pet-id"));

            pet_details_modal.modal("show");
        })

        .on("click", "#like_pet_btn", function(){
            let like_pet_btn = $(this);
            let total_likes = like_pet_btn.siblings("#total_likes").text();
            let number_of_likes = parseInt(total_likes.split(" ")[0]);
            let pet_likes = number_of_likes + 1;

            if(like_pet_btn.siblings("#is_like_pet").val() === "false"){
                $("#add_pet_section tr[data-pet-id=" + like_pet_btn.siblings("#pet_id").val() +"]").attr("data-like", pet_likes);
                $("#add_pet_section tr[data-pet-id=" + like_pet_btn.siblings("#pet_id").val() +"]").attr("data-is-liked", true)
                $("#total_likes").html(pet_likes + " Likes");
                like_pet_btn.siblings("#is_like_pet").val("true");
            }
        })

        .on("click", "#adopt_pet_btn", function(){
            let adopt_pet = $(this);

            $("#add_pet_section tr[data-pet-id=" + adopt_pet.siblings("#pet_id").val() + "]").remove();

            adopt_pet.closest("#pet_details_modal").modal("hide");
        })

        .on("click", ".edit_pet_btn", function(){
            let edit_pet_modal = $("#edit_pet_modal");
            let edit_pet_btn = $(this).closest("tr");
            let data_skills = edit_pet_btn.data("skills");
            let edit_data_pet_id = edit_pet_btn.data("pet-id");

            edit_pet_modal.find(".edit_pet_name").html("Edit Details: " + edit_pet_btn.find(".pet_name").text());

            edit_pet_modal.find("#edit_pettype").data("pet-id", edit_data_pet_id).val(edit_pet_btn.find(".pet_type").text());
            edit_pet_modal.find("#edit_description").data("pet-id", edit_data_pet_id).val(edit_pet_btn.find(".hidden_description").text());
            
            $.each(data_skills, function(index, value) {   
                edit_pet_modal.find(".edit_skill_" + index).val(value);
            });

            edit_pet_modal.find("input[type='text'], textarea").removeClass("border_red");
            edit_pet_modal.modal("show");
        })

        .on("submit", "#edit_pet_form", function(e){
            e.preventDefault();
            let edit_pet_form = $(this);
            let edit_pet_modal = edit_pet_form.closest("#edit_pet_modal");
            let skill_1 = edit_pet_form.find(".edit_skill_0").val();
            let skill_2 = edit_pet_form.find(".edit_skill_1").val();
            let skill_3 = edit_pet_form.find(".edit_skill_2").val();
            let active_data_pet_id = edit_pet_form.find("#edit_pettype").data("pet-id");

            edit_pet_form.find("input[type='text'], textarea").each(function() {
				let input = $(this);
                if(input.val() == "" || input.val().length < 3 ){
                    input.addClass("border_red");
                }
                else{
                    input.removeClass("border_red");
                }
            });
            let skills = [skill_1, skill_2, skill_3];

            if(edit_pet_form.find("input[type='text'], textarea").hasClass("border_red") === false){
                $("#add_pet_section tr[data-pet-id=" + active_data_pet_id + "]").find(".pet_type").text(edit_pet_form.find("#edit_pettype").val());
                $("#add_pet_section tr[data-pet-id=" + active_data_pet_id + "]").find(".hidden_description").text(edit_pet_form.find("#edit_description").val());
                $("#add_pet_section tr[data-pet-id=" + active_data_pet_id + "]").data("skills", skills);

                edit_pet_modal.modal("hide");
            }
            return false;
        })
});



 