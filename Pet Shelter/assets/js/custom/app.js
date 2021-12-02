$(document).ready(function(){

    
    $("body")
        .on("click", "#submit", function(){
        let addForm = $("#addForm");
        
            console.log('submit');
            console.log($(addForm).serializeArray());
        
        
        /*if($(addForm).empty()){//if input value is empty and less 3 characters
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
     });
  
});