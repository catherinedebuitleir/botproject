$( document ).ready(function() {
    //on click first input - show second
   $('#level1 input').keyup(function() {
        //show second
       $('#level2').show();
        //on click second input - show third
       $('#level2 input').keyup(function() {
         // show third
        $('#level3').show(); 
        $('#level3 input').keyup(function() {
             // show fourth
            $('#level4').show();
            $('#level4 input').keyup(function() {
                 // show fifth
                $('#level5').show();
        
                });
    
            });

        });

    });

  
  
});