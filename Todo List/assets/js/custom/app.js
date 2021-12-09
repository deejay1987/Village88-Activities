$(document).ready(function(){

    $("body")
        .on("submit", "#add_todo_form", function(e){
            e.preventDefault();
            let add_todo_form = $(this);
            let todo_input = add_todo_form.find("#todo_input");

            if(todo_input.val() == "" || todo_input.val().length < 3){
                todo_input.addClass("border_red");
            }
            else{
                todo_input.removeClass("border_red");
            }

            if(!todo_input.hasClass("border_red")){ // || if(todo_input.hasClass("border_red") === false)
                $("ul").prepend("<li>" + todo_input.val() + "</li>");

                add_todo_form[0].reset();
            }
        });
});