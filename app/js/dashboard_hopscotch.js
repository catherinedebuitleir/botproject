/*jshint esversion: 6 */

$(document).ready(function(){
    // add
    $('h1').attr('id', 'page_head');
    $('#page_head').html('<h1 id="page_head">New Dashboard <span id="drop_arrow"><i class="fa fa-angle-down"></i></span></h1>');

    var tour = {
        id: "hello-hopscotch",
        steps: [
          {
            title: "New Dashboard",
            content: "Welcome to your new dashbaord. Please take a look around.",
            target: "page_head",
            placement: "bottom"
          },
          {
            title: "Choose a Dashboard",
            content: "Click on this Drop down to select from one of our preconfigured dashboards. Or pick one from the page below. We think you can find one to suit your role.",
            target: "drop_arrow",
            placement: "right"
          },
          {
            title: "Create a Dashboard",
            content: "If you don't find a dashboard from our selection, you can easily customise or create a new one from scratch.",
            target: "page_act_edit",
            xOffset: -150,
            yOffset: 12,
            arrowOffset: "center",
            placement: "bottom"
          },
          {
            title: "Return to original Dashboard",
            content: "Not ready to make the switch, simply return to your old dashbaord. Thank you.",
            target: "page_act_old",
            xOffset: -140,
            yOffset: 12,
            arrowOffset: "center",
            placement: "bottom"
          },
          {
            title: "Take the tour again",
            content: "You can always take a tour, wherever you see this icon. Or <strong>talk to your account team </strong><i class='fas fa-link'></i> if you have questions.",
            target: "page_act_tour",
            xOffset: -250,
            yOffset: 12,
            arrowOffset: 242,
            placement: "bottom"
          }
        ],
        showPrevButton: true,
        showNextButton: true
      };

    // Start the tour!
    // hopscotch.startTour(tour);
    //   var calloutMgr = hopscotch.getCalloutManager();
    //   calloutMgr.createCallout({
    //     id: 'attach-icon',
    //     target: 'page_head',
    //     placement: 'bottom',
    //     title: 'Now you can search more easily!',
    //     content: 'Share a project you\'re proud of, a photo from a recent event, or an interesting presentation.'
    //   });
    //   hopscotch.startTour(calloutMgr);
    hopscotch.startTour(tour);
});