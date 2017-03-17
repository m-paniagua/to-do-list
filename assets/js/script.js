// JavaScript File
$(document).ready(function() {
    //var listItems = $("#list li");
    var input = $("input");
    
    $(document).on("click", "li", function() {
        $(this).addClass("completed");
    });
    
    $(document).on("click", "span", function() { 
       $(this).parent().fadeOut(600, function() {
           $(this).remove();
       });
    });
    
    input.keypress(function(event) {
      if (event.which == '13') {
          var newItem = input.val();
          $("#list").append('<li><span><i class="fa fa-trash"></i></span>' + newItem + '</li>')
          input.val("");
      }
    });
    
    $(".fa-plus").on("click", function() {
        input.fadeToggle(600);
    })
});