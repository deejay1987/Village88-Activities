$(document).ready(function(){
    
    $("body")
      .on("click", "td img", function(){
        $(this).hide();
      })
    
      .on("click", "#visitExternalLink", function(){
        Confirm('Reset Game', 'Are you sure you want to reset the game?', 'Yes', 'Cancel');
      })

      .on('click', '.doAction', function() {
        $(this).parents('.dialog-ovelay').fadeOut(500, function () {
          $(this).remove();
          $('img').show();
        });
      })

      .on("click", ".cancelAction, .fa-close", function(){
        $(this).parents('.dialog-ovelay').fadeOut(500, function () {
          $(this).remove();
        });
      });
});

function Confirm(title, msg, $true, $false) { /*change*/
  var $content =  "<div class='dialog-ovelay'>" +
                  "<div class='dialog'><header>" +
                    " <h3> " + title + " </h3> " +
                    "<i class='fa fa-close'></i>" +
                "</header>" +
                "<div class='dialog-msg'>" +
                    " <p> " + msg + " </p> " +
                "</div>" +
                "<footer>" +
                    "<div class='controls'>" +
                        " <button class='button button-danger doAction'>" + $true + "</button> " +
                        " <button class='button button-default cancelAction'>" + $false + "</button> " +
                    "</div>" +
                "</footer>" +
            "</div>" +
          "</div>";
          
  $('body').prepend($content);
}