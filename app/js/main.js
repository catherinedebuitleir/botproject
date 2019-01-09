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

$(document).ready(function($) {

  // Example component js

  // Panel - Expandable
  $( "#panel-show-more" ).click(function() {
    $( "#panel-show-less" ).show();
    $( "#panel-show-more" ).hide();
    $( "#expanded-section" ).show();
  });
  
  $( "#panel-show-less" ).click(function() {
    $( "#panel-show-more" ).show();
    $( "#panel-show-less" ).hide();
    $( "#expanded-section" ).hide();
  });

  // Panel - Next Buttons
  $( "#panel-one-next" ).click(function() {
    $('#collapseTwo').collapse('show');
    $( "#checkOne" ).removeClass( "not-started" );
  });

  $( "#panel-two-next" ).click(function() {
    $('#collapseThree').collapse('show');
    $( "#checkTwo" ).removeClass( "not-started" );
  });

  $( "#panel-three-next" ).click(function() {
    $( "#wizard-submit" ).removeAttr("disabled");
    $( "#checkThree" ).removeClass( "not-started" );
  });

  // Search - Expandable
  $( "#search-show-more" ).click(function() {
    $( "#search-show-less" ).show();
    $( "#search-show-more" ).hide();
    $( "#search-expanded" ).show();
  });
  
  $( "#search-show-less" ).click(function() {
    $( "#search-show-more" ).show();
    $( "#search-show-less" ).hide();
    $( "#search-expanded" ).hide();
  });

});





