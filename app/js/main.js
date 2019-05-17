/*jshint esversion: 6 */

// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [{
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
  $("#panel-show-more").click(function() {
    $("#panel-show-less").show();
    $("#panel-show-more").hide();
    $("#expanded-section").show();
  });

  $("#panel-show-less").click(function() {
    $("#panel-show-more").show();
    $("#panel-show-less").hide();
    $("#expanded-section").hide();
  });

  // Panel - Next Buttons
  $("#panel-one-next").click(function() {
    $('#collapseTwo').collapse('show');
    $("#checkOne").removeClass("not-started");
  });

  $("#panel-two-next").click(function() {
    $('#collapseThree').collapse('show');
    $("#checkTwo").removeClass("not-started");
  });

  $("#panel-three-next").click(function() {
    $("#wizard-submit").removeAttr("disabled");
    $("#checkThree").removeClass("not-started");
  });

  // Search - Expandable
  $("#show-filters").click(function() {
    $("#search-main").show();
    $("#hide-filters").show();
    $("#show-filters").hide();
    $("#collapsed-filters").hide();
  });

  $("#hide-filters").click(function() {
    $("#search-main").hide();
    $("#hide-filters").hide();
    $("#show-filters").show();
    $("#collapsed-filters").show();
  });

  $("#search-show-more").click(function() {
    $("#search-show-less").show();
    $("#search-show-more").hide();
    $("#search-expanded").show();
  });

  $("#search-show-less").click(function() {
    $("#search-show-more").show();
    $("#search-show-less").hide();
    $("#search-expanded").hide();
  });

  $('[data-toggle="popover"]').popover({
    html: true,
    trigger: 'focus',
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });

  $("#comment").click(function() {
    $("#chatboxes").toggle();
    $("#bubble").toggle();
    $("#close").toggle();
  });

  $(".header").click(function() {
    $("#chatboxes").toggle();
    $("#bubble").toggle();
    $("#close").toggle();
  });
  

});

function spend() {
  // Add user message
  var txt1 = "<div class='comment-by-user'> What did I spend last month?</div>";
  $(".end").before(txt1);
  // Hide suggestions
  $("#monthlyspend").remove();
  $(".monthlyprediction").remove();
  $("#supportticket").remove();
  // Add sending status
  var txt2 = "<p class='f-r w-100 ta-r' id='sending'><small>Sending...</small></p>";
  $(".end").before(txt2);
  // Sent
  setTimeout(function() {
    $("#sending").remove()
    var txt2 = "<p class='f-r w-100 ta-r' id='sent'><small>Sent</small></p>";
    $(".end").before(txt2);
  }, 5000);
  // answer
  setTimeout(function() {
    $("#sent").remove()
    var txt3 = '<div class="comment-by-bot" id="lastmonthspend">You spent 💰<b>28,900.78</b> USD last month.<br><p class="mt-15">10,700.20 USD products ordered</p><a class="btn btn-link"><i class="fas fa-arrow-circle-right"></i> View Orders</a><p class="mt-5">18,200.58 USD on Azure</p><a class="btn btn-link"><i class="fas fa-arrow-circle-right"></i> View Azure Consumption</a></div>';
    $(".end").before(txt3);
  }, 8000);
  setTimeout(function() {
    var txt4 = '<a class="btn btn-default mt-15 mb-10 monthlyprediction" onclick="prediction()" >What is my predicted spend for next month?</a><a class="btn btn-default"  id="supportticket"  onclick="support()">I want to submit a support ticket</a>';
    $(".end-suggestions").before(txt4);
  }, 14000);

  return false;
}

function prediction() {
  // Add user message
  var txt5 = "<div class='comment-by-user'> What is my predicted spend for next month?</div>";
  $(".end").before(txt5);
  // Hide suggestions
  $("#monthlyspend").remove();
  $(".monthlyprediction").remove();
  $("#supportticket").remove();
  // Add sending status
  var txt6 = "<p class='f-r w-100 ta-r' id='sending'><small>Sending...</small></p>";
  $(".end").before(txt6);
  // Sent
  setTimeout(function() {
    $("#sending").remove()
    var txt7 = "<p class='f-r w-100 ta-r' id='sent'><small>Sent</small></p>";
    $(".end").before(txt7);
  }, 5000);
  // answer
  setTimeout(function() {
    $("#sent").remove();
    var txt8 = '<div class="comment-by-bot">Your predicted spend for next month is <b>35,700.10</b> USD.<br><p class="mt-15">15,700.10 USD licenses renewed</p><a class="btn btn-link"><i class="fas fa-arrow-circle-right"></i> View Upcoming Renewals</a><p class="mt-5">20,000.00 USD on Azure</p><a class="btn btn-link"><i class="fas fa-arrow-circle-right"></i> View Azure Consumption</a></div>';
    $(".end").before(txt8);
  }, 8000);
  setTimeout(function() {
    var txt9 = '<a class="btn btn-default mt-15 mb-10" id="monthlyspend" onclick="spend()"> What did I spend last month?</a><a class="btn btn-default"  id="supportticket"  onclick="support()">I want to submit a support ticket</a>';
    $(".end-suggestions").before(txt9);
  }, 14000);

  return false;
}

function support() {
  // Add user message
  var txt5 = "<div class='comment-by-user'> I want to submit a support ticket</div>";
  $(".end").before(txt5);
  // Hide suggestions
  $("#monthlyspend").remove();
  $(".monthlyprediction").remove();
  $("#supportticket").remove();
  // Add sending status
  var txt6 = "<p class='f-r w-100 ta-r' id='sending'><small>Sending...</small></p>";
  $(".end").before(txt6);
  // Sent
  setTimeout(function() {
    $("#sending").remove()
    var txt7 = "<p class='f-r w-100 ta-r' id='sent'><small>Sent</small></p>";
    $(".end").before(txt7);
  }, 5000);
  // answer
  setTimeout(function() {
    $("#sent").remove();
    var txt8 = '<div class="comment-by-bot">Our team responds to requests within 24 hours.<br><a class="btn btn-link"><i class="fas fa-ticket-alt"></i> Submit A Support Ticket</a><br><br>Would you like to track issues?<br><a class="btn btn-link"><i class="fas fa-search"></i> View Support Ticket</a></div>';
    $(".end").before(txt8);
  }, 8000);

  return false;
}