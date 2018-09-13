
 $( document ).ready(function() {
     //use button id as your trigger (e.g id=wizardnext)
    $('#wizardnext').click(function(e){
        e.preventDefault();
        document.location.href = 'macros.html';
    });
   
});