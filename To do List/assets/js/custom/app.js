$(document).ready(function() {

    $("body")
        // default to add to do list modal
        .on("click", "#add_todo_button", function(){
            let todo_list_modal = $("#todo_list_modal");
            todo_list_modal.find(".select_type_option").val("home");
            todo_list_modal.find("input[type='text']").removeClass("border_red");

            todo_list_modal.modal("show");
        })
        // adding to do list section
        .on("submit", "#add_todo_form", function(e){
            e.preventDefault();
    
            let add_todo_form = $(this);
            let todo_input = add_todo_form.find("#todo_input");
            let todo_id = Math.floor((Math.random() * 100) + 1);
            let select_type_option = add_todo_form.find(".select_type_option").val();
            let others_type_input = add_todo_form.find(".others_type_input").val(); 
            
			/* This will loop thru all input inside the for and validate it. */
            add_todo_form.find("input[type='text']").each(function() {
				let input = $(this);
                if(!input.hasClass("hidden")){
                    if(input.val() == "" || input.val().length < 3 ){
                        input.addClass("border_red");
                    }
                    else{
                        input.removeClass("border_red");
                    }
                }
            });

            if(add_todo_form.find("input[type=text]").hasClass("border_red") === false){
               $("#todo_list").prepend(              
                    "<li data-todo-id='" + todo_id + "' data-others-value='" + others_type_input + "' data-type-id='" + select_type_option + "'>" + "<span>" + todo_input.val() + "</span>" +
                    `<button type="button" class="update_todo_btn">Edit</button>` +
                    `<button type="button" class="delete_todo_btn" data-bs-toggle="modal" data-bs-target="#delete_list_modal">Delete</button> ` +
                    "</li>"
                ); 
                add_todo_form[0].reset();
                add_todo_form.find(".others_type_input").addClass("hidden");
                add_todo_form.closest("#todo_list_modal").modal("hide");
            }
            return false;
        })
  
        /* This will show the delete todo list modal */
        .on("click", ".delete_todo_btn", function(){
            let delete_todo_btn = $(this);
            let delete_list_modal = $("#delete_list_modal");

            delete_list_modal.find("input[name='todo_id']").val(delete_todo_btn.closest("li").data("todo-id")); 
            // console.log(delete_todo_btn.closest("li").data("todo-id"));
            delete_list_modal.find("#todo_title").text(delete_todo_btn.siblings("span").text()); 
    
            delete_list_modal.modal("show");
        })
    
        .on("submit", "#delete_todo_form_btn", function(e){
            e.preventDefault();
            let delete_todo_list = $(this);
    
            $("#todo_list li[data-todo-id=" + delete_todo_list.find("input").val() + "]").remove();
            
            delete_todo_list.closest("#delete_list_modal").modal("hide");
        })
        
        // This will show the update to do list modal
        .on("click", ".update_todo_btn", function (){
            let update_list_modal = $("#update_list_modal");
            let todo_item = $(this).closest("li");

            update_list_modal.find("#update_todo_input").data("todo-id", todo_item.data("todo-id")).val(todo_item.find("span").text());
            update_list_modal.find("input[type=text]").removeClass("border_red");
            update_list_modal.modal("show");  
        }) 

        .on("submit", "#update_todo_form", function (e){
            e.preventDefault();
            let update_form = $(this);
            let update_others_type_input = update_form.find(".others_type_input");
            let active_todo_form = $("#todo_list li[data-todo-id=" + update_form.find("input").data("todo-id") + "] ");
            let update_select_type_option = update_form.find(".select_type_option").val()

            update_form.find("input[type='text']").each(function() {
				let input = $(this);
              	if(!input.hasClass("hidden")){   
                	if(input.val() == "" || input.val().length < 3 ){
                    	input.addClass("border_red");
                    }
                    else{
                    	input.removeClass("border_red");
                    }
                }
            });  
            
            if(update_form.find("input[type=text]").hasClass("border_red") === false){
                active_todo_form.find("span").text(update_form.find("input").val());
                active_todo_form.data("type-id", update_select_type_option);
                active_todo_form.data("others-value", update_others_type_input.val());
                
                update_form.closest("#update_list_modal").modal("hide");
            }
            return false;
        })

        // dafault and change the value of selected option 
        .on("change", ".select_type_option", function(){
            let value = $(this).val();
            let change_type_input = $(this).siblings(".others_type_input");
			
            change_type_input.removeClass("border_red").val("");
            
            if(value == "others"){
            	change_type_input.removeClass("hidden");
            }
            else{
            	change_type_input.addClass("hidden");
            }
        })
}); 