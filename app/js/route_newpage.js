
 $( document ).ready(function() {
     //use button id as your trigger (e.g id=wizardnext)
    $('#wizardnext').click(function(e){
        e.preventDefault();
        //name the file you want to go to 
        document.location.href = 'macros.html';
    });
   
});