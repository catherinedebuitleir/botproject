
 $( document ).ready(function() {
     //use button id as your trigger (e.g id=wizardnext)
    $('#wizardnext').click(function(e){
        e.preventDefault();
        //name the html file you want to go to
        document.location.href = 'wizard2.html';
    });

});