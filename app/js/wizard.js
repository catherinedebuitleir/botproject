/* jshint esversion: 6 */

$(document).ready(function($){

    //first wizard button takes us to next page
    $('#wizard_page_2').click(function(e){
      e.preventDefault();
      //name the html file you want to go to
      window.location.href = 'wizard2.html';
    });

    // a generic function for capturing values of forms
    // https://api.jquery.com/serializeArray/
    // object to store our for field results
    //session holds data across pages
    console.log("loaded wizard outer");
    // note we attach this function to any form by calling 'form
    // if we wanted a named form: $('form[name="myFormName"]')
    $( "form" ).submit(function( event ) {
      // prevent default form button submit action
      event.preventDefault();
      // object to store form results
      var form_results = {};
      //session key
      var session_key = "wizard2_form";
      //serialise the form and save to a var
      var fields = $( this ).serializeArray();
      $.each(fields, function (i, field) {
        form_results[field.name] = field.value;
      });
      // store the form in a session
      // https://ciphertrick.com/2015/01/20/session-handling-using-jquery/
      console.log(form_results);
      $.session.set(session_key, form_results);

      // now load our new window
      window.location.href = 'wizard3.html';
    });
    //console log the session variable
    var wizard_2_fields = $.session.get(session_key);
    console.log(JSON.parse(wizard_2_fields));
  });