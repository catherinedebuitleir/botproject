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

$(document).ready(function($) {
  // alert("js is working");
  // first child p
  var first_P = $(".tiles p span").text('Monkeys');
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
  $(function(){
    $('.tiles h4 span').click(function(){
      if($(this).data('count')) { //aleady clicked
        $(this).data('count', $(this).data('count') + 1);
      } else {
        // initialise a number
        var num = $(this).text();
        var num_int = parseInt(num);
        //set number and initialize
        $(this).data('count', num_int)
      }
      $(this).html($(this).data('count'))
    })
  });
});