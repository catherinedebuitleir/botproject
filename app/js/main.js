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
  var first_P = $("#invoices p span").text('Monkeys');
  // first child h4
  $("#invoices").click(function(){
    var num = $("#invoices h4 span").text();
    var num_int = parseInt(num);
    num_int = num_int + 1;
    $("#invoices h4 span").text(num_int);
    console.warn(num_int);
  })
  // var first_h4 = $("#invoices :first-child h4").text('26');
});