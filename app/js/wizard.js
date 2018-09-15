/* jshint esversion: 6 */
$(document).ready(function($){
    // a generic function for capturing values of forms
    // https://api.jquery.com/serializeArray/
    // object to store our for field results
    let form_results = {};
    //session holds data across pages
    let sessionKey = "sessionKey";
    // note we attach this function to any form by calling 'form
    // if we wanted a named form: $('form[name="myFormName"]')
    $( "form" ).submit(function( event ) {
      //serialise the form and save to a var
      var fields = $( this ).serializeArray();
      $.each(fields, function (i, field) {
        form_results[field.name] = field.value;
      });
      // store the form in a session
      // https://ciphertrick.com/2015/01/20/session-handling-using-jquery/
      $.session.set(sessionKey, form_results);
      event.preventDefault();
      // now load our new window
      window.location.href = 'wizard3.html';
      //console log the session variable
      console.log($.session.get("sessionKey"));
    });
  });