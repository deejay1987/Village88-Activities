$(document).ready(function(){
   
    $(function() {
        $("#date").datepicker({ minDate: 0, maxDate: "+1M" }).on('changeDate', function(ev) {
            if($(this).valid()){
            $('#date').removeClass('invalid').addClass('success');   
            }
        });
    });

    $('form[id="orderForm"]').validate({
    
    rules: {
        firstname: "required",
        lastname: "required",
        phoneNumber: "required",
        date: {
            required: true,
            date: true
        },
        email: {
            required: true,
            email: true
        },
        creditcard: {
            required: true,
            creditcard: true
        }
    },
        messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        phoneNumber: "Please enter your phone number",
        date: "Please enter a valid date",
        email: "Please enter a valid email address"
        },
        
            submitHandler: function(form){
            alert('Thank you');
            form.submit();
        }
    });
});


