$(document).ready(function(){

    $("body")
    .on("submit", "#todo_list", function(e){
        e.preventDefault();
        let list_item = $("#todo");
        valid = true;

        if($(list_item).val() == "" || $(list_item).val().length < 3){
            $(list_item).css("border", "1px solid red");
            valid = false;
            return false;
        }
        else{
            $(list_item).css("border", "none");
        }

        $("#list").prepend("<li>" + list_item.val() + "</li>");
        $("#todo_list")[0].reset();
    })
});