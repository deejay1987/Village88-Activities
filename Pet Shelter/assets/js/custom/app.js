$(document).ready(function(){
    // var count = 0;

    $("body")
    .on("submit", "#addForm", function(e){
        e.preventDefault();
        let addForm = $(this);
        let add_form_data_array = addForm.find("#addForm").serializeArray();
        // let table_td = "";

        if(add_form_data_array.val() == "" || (add_form_data_array).val().length < 3 ? (add_form_data_array).addClass("border_red") : (add_form_data_array).removeClass("border_red"));
        
        if(!add_form_data_array.hasClass("border_red")){
            $("#pets").append(
                "<tr>" + add_form_data_array.val() + `
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
        }
        // if($("#pettype").val() == "" || $("#pettype").val().length < 3 ? $("#pettype").addClass("border_red") : $("#pettype").removeClass("border_red"));

        // if($("#description").val() == "" || $("#description").val().length < 3 ? $("#description").addClass("border_red") : $("#description").removeClass("border_red"));

        // if($("#skills").val() == "" || $("#skills").val().length < 3 ? $("#skills").addClass("border_red") : $("#skills").removeClass("border_red"));
           

        // for (i=0; i<add_form_data_array.length; i++) {
            
        //     if(add_form_data_array[i].name == "description" || add_form_data_array[i].name  == "skills"){
               
        //     }
        //     else{
        //         table_td += "<td>" + add_form_data_array[i].value + "</td>";
        //     }
        // }
        // $("#pets").append(
        //     "<tr>" + table_td + `
        //         <td>
        //             <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#details">
        //                 <img src="../assets/images/details.png" alt="Vector">
        //                 Details
        //             </button>
        //         </td>
        //         <td>
        //             <button class="btn" data-bs-toggle="modal" data-bs-target="#edit">
        //                 <img src="../assets/images/edit.png" alt="Vector">
        //                 Edit
        //             </button>
        //         </td>
        //     </tr>`);
    })
    // .on("click", "#like_pet", function(){
    //     count++;
        
    //     if(count === 1) {
    //         $("#likes").html("1 Like");
    //     }
    //     else {
    //         $("#likes").html(count + " Likes");
    //     }
    // })

    // .on("click", "submit", function(){
    //     let pet = "";
    //     var petName = $("#petname").val(); /*passing data to the details and edit header modal*/
    //     $("#details_about").html("Details about: " + petName);
    //     $("#edit_details").html("Edit details: " + petName);

    //     if(add_form_data_array[i].name == "petname"){

    //     }
    //     else{
    //         pet += "<td>" + add_form_data_array[i].value + "</td>"
    //     }
    //     $("#table_modal").html("<tr>" + pet + "</tr>");  
    // })
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