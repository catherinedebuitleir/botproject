
 $( document ).ready(function() {
     //use button id as your trigger (e.g id=wizardnext)
    $('#tile_1').click(function(e){
        e.preventDefault();
        //session storage can (on selected browsers hold data between pages)
        sessionStorage.SessionName = "you can put any data you like here",
        //name the html file you want to go to
        document.location.href = 'wizard2.html';
    });

});