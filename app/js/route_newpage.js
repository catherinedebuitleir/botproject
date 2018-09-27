
 $( document ).ready(function() {
     //use button id as your trigger (e.g id=wizardnext)
    $('#wizardnext').click(function(e){
        e.preventDefault();
        //name the file you want to go to 
        document.location.href = 'wizard2.html';
    });
      //use button id as your trigger (e.g id=wizardnext)
     $('#backpage1').click(function(e){
     e.preventDefault();
    //name the file you want to go to 
    document.location.href = 'index.html';
});
    //use button id as your trigger (e.g id=wizardnext)
   $('#page3').click(function(e){
       e.preventDefault();
       //name the file you want to go to 
      document.location.href = 'wizard3.html';
   });

   $('#editlevels').click(function(e){
    e.preventDefault();
    //name the file you want to go to 
   document.location.href = 'wizard2.html';
});
   
});





//$( document ).ready(function() {
    //use button id as your trigger (e.g id=wizardnext)
   //$('#page3').click(function(e){
      // e.preventDefault();
       //name the file you want to go to 
      // document.location.href = 'wizard3.html';
  // });
  
//});