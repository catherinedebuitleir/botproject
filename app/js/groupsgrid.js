$( document ).ready(function() {
    // adding department
    $('.adddept').click(function(){
       // adding groups to the grid - inline editing
        $('.adddept').hide();
        $('#level1').show();
         $('#level1save').click(function(){
            $('#level1').hide();
            $('#level1finance').show();
            $('.actions1').show();

            if(  $("#level1finance").is(":visible") == true ){  
                $('.add-loc').on("mouseenter", function() {
                    $("button").show();
                  })
             }



        });
    });
            // adding location
            $('.addlocation').click(function(){
                $('.addlocation').hide();
                $('#level2').show();
                 $('#level2save').click(function(){
                    $('#level2').hide();
                    $('#level2krakow').show();
                    $('.actions2').show();
                    

        });
    });
               // adding team
            $('.addteam').click(function(){
                $('.addteam').hide();
                $('#level3').show();
                 $('#level3save').click(function(){
                    $('#level3').hide();
                    $('#level3ursus').show();
                    $('.actions3').show();

        });
    });
});

