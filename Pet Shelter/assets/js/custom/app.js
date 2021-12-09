$(document).ready(function(){
    var count = 0;

    $("body")
    .on("click", "#submit", function(){
        valid = true;
        alert("submit")
        if($("#petname").val() == "" || $("#petname").val().length < 3){
            $("#petname").css('border','1px solid red');
                valid = false;
                return false;
        }
        else{
            $("#petname").css('border','none');
        }

        if($("#pettype").val() == "" || $("#pettype").val().length < 3){
            $("#pettype").css('border','1px solid red');
            valid = false;
            return false;
        }
        else{
            $("#pettype").css('border','none');
        }

        if($("#description").val() == "" || $("#description").val().length < 3){
            $("#description").css('border','1px solid red');
            valid = false;
            return false;
        }
        else{
            $("#description").css('border','none');
        }

        if($("#skills").val() == "" || $("#skills").val().length < 3){
            $("#skills").css('border','1px solid red');
            valid = false;
            return false;
        }
        else{
            $("#skills").css('border','none');
        }
    })
    .on("submit", "#addForm", function(){
        // array
        let add_form_data_array = $("#addForm").serializeArray();
        let table_td = "";

        for (i=0; i<add_form_data_array.length; i++) {
            
            if(add_form_data_array[i].name == "Description" || add_form_data_array[i].name  == "Skills"){
               
            }
            else{
                table_td += "<td>" + add_form_data_array[i].value + "</td>";
            }
        }
        $("#pets").append(
            "<tr>" + table_td + `
                <td>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#details">
                        <img src="../assets/images/details.png" alt="Vector">
                        Details
                    </button>
                </td>
                <td>
                    <button class="btn" data-bs-toggle="modal" data-bs-target="#edit">
                        <img src="../assets/images/edit.png" alt="Vector">
                        Edit
                    </button>
                </td>
            </tr>`);
    })

    .on("click", "submit", function(){
        let pet = "";
        var petName = $("#petname").val(); /*passing data to the details and edit header modal*/
        $("#details_about").html("Details about: " + petName);
        $("#edit_details").html("Edit details: " + petName);

        if(add_form_data_array[i].name == "petname"){

        }
        else{
            pet += "<td>" + add_form_data_array[i].value + "</td>"
        }
        $("#table_modal").html("<tr>" + pet + "</tr>");  
    })
    
    .on("click", "#like_pet", function(){
        count++;
        
        if(count === 1) {
            $("#likes").html("1 Like");
        }
        else {
            $("#likes").html(count + " Likes");
        }
    });
});


    // Pet Details Modal
    // pet name will appear to Modal Title ".modal-title"
    // pet type, description and skills will appear to the modal body ".modal-body"

   

   
// });
        /*if(){//if input value is empty and less 3 characters
            // add border red in input
        }
        else{
            //if input value is not empty and more than 3 characters
            // remove the border red in input.
        }

        // SUBMITv c
        if(){ //if there is any red border in the form
            // Do no submit the form;
        }    
        else{
            // Submit the form. and append to table
            // .append()
        }*/
//      });
  
// });