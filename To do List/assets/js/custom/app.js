$(document).ready(function() {

    $("body")
        .on("submit", "#add_todo_form", function(e) {
            e.preventDefault();
            $("#todo_list_modal").modal("hide");
    
            let add_todo_form = $(this);
            let todo_input = add_todo_form.find("#todo_input");
            let todoId = $("#todo_list").find("li").length + 1;
    
    
            if (todo_input.val() == "" || todo_input.val().length < 3) {
            todo_input.addClass("border_red");
            } else {
            todo_input.removeClass("border_red");
            }
    
            if (todo_input.hasClass("border_red") === false) {
            $("#todo_list").prepend(
                "<li data-todo-id='" + todoId + "'>" + "<span>" + todo_input.val() + "</span>" +
                `<button type="button" class="update_todo_list">Edit</button>` +
                `<button type="button" class="delete_todo_list" data-bs-toggle="modal" data-bs-target="#delete_list_modal">Delete</button> ` +
                "</li>");
            add_todo_form[0].reset();
            }
            return false;
        })
  
        .on("click", ".delete_todo_list", function() {
            let delete_list_modal = $("#delete_list_modal");
    
            delete_list_modal.find("input[name='todo_id']").val($(this).closest("li").data("todo-id")); 
            // console.log($(this).closest("li").data("todo-id"));
    
            delete_list_modal.find("#todo_title").text($(this).siblings("span").text());
            // console.log($(this).siblings("span").text());
    
            $("#delete_list_modal").modal("show");
        })
    
        .on("submit", "#delete_button_form", function(e) {
            e.preventDefault();
            let form = $(this);
            // console.log(form.find("input").val());
    
            $("#todo_list li[data-todo-id='" + form.find("input").val() + "']").remove();
    
            $("#delete_list_modal").modal("hide");
        })
    
        .on("click", ".update_todo_list", function () {
            let update_list_modal = $("#update_list_modal");
            let todoItem = $(this).closest("li");
        
            update_list_modal.find("#update_todo_input").data("todo-id", todoItem.data("todo-id")).val(todoItem.find("span").text());
            // console.log(update_list_modal.find("#update_todo_input").data('todo-id', item.data('todo-id')).val(item.find("span").text()));
            
            // update_list_modal.find("#update_todo_input").data("todo-id", $(this).closest("li").data("todo-id")).val($(this).siblings("span").text());
            // console.log($(this).closest("li").data("todo-id")); /* data attribute */

            // update_list_modal.find("#update_todo_input").val($(this).siblings("span").text());
            // console.log($(this).siblings("span").text()); /* span */

            $("#update_list_modal").modal("show");
        })

        .on("submit", "#update_todo_form", function (e) {
            e.preventDefault();
            let updateForm = $(this);
            
            $("#todo_list li[data-todo-id='" + updateForm.find("input").data("todo-id") + "']").find("span").text(updateForm.find("input").val());
            // console.log(updateForm.find("input").data("todo-id"));
            // console.log(updateForm.find("input").val());

            // let todoInput = updateForm.find("input");
            // let todoItem = $("[data-todo-id=${todoInput.data("todo-id")}]");
            // console.log(todoItem); /* li */
            // todoItem.find('span').text(todoInput.val());
        
            updateForm[0].reset();

            $("#update_list_modal").modal("hide");
        });
});
  