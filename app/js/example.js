/*jshint esversion: 6 */

// Define the tour!
var tour = {
    id: "hello-hopscotch",
    steps: [
      {
        title: "New Search",
        content: "Try our new smarter, faster search.",
        target: "search",
        placement: "top"
      },
      {
        title: "Favorites!",
        content: "See all your favorites in one place.",
        target: "favorite",
        placement: "top"
      },
      {
        title: "Promotions",
        content: "Find all of our latest offerson this page (check back often, we update regularly).",
        target: "promotion",
        placement: "top"
      },
      {
        title: "Favorites",
        content: "Add your favorite products, so you can purchase again easily - or share with your team mates.",
        target: "visio",
        placement: "top"
      },
      {
        title: "Or Get Help",
        content: "We are always happy to talk to you (the most important person we could talk too is you), just call or email today. ",
        target: "help",
        placement: "top"
      }
    ]
  };

  // Start the tour!
  // hopscotch.startTour(tour);

  // var calloutMgr = hopscotch.getCalloutManager();
  // calloutMgr.createCallout({
  //   id: 'attach-icon',
  //   target: 'search',
  //   placement: 'bottom',
  //   title: 'Now you can search more easily!',
  //   content: 'Share a project you\'re proud of, a photo from a recent event, or an interesting presentation.'
  // });

  // $(document).ready(function($) {
    // alert("js is working");
    // first child p
    // var first_P = $(".tiles p span").text('Monkeys');
    // first child h4
    // $("#invoices").click(function(){
    //   var num = $("#invoices h4 span").text();
    //   var num_int = parseInt(num);
    //   num_int = num_int + 1;
    //   $("#invoices h4 span").text(num_int);
    //   // example of changing css of child (.tile class within #invoices id)
    //   $("#invoices .tile").css('border', '1px dashed green');
    //   // example of selecting changing text by parents class
    //   $("#invoices h4 .fas").css('color', 'green');
    // });
    // add a function to all class
  //   $(function(){
  //     $('.tiles').on("click", function() {
  //       //save the selector as num
  //       var num = $(this).find("h4 span");
  //       var num_int = parseInt(num.text());
  //       num_int = num_int + 1;
  //       //set the count
  //       $(this).find('h4 span').text(num_int);
  //     });
  //   });
  //   // add a function to get all tiles
  //   $('.tiles').bind('click', function () {
  //     var sum = 0;
  //     $('.tiles').each(function() {
  //       sum += parseInt($(this).find("h4 span").text());
  //     });
  //     // here, you have your sum
  //     alert("Sum of all tiles: " + sum);
  //    });
  // });\

// form and store results across pages
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
