$(document).ready(function($){
    var sourceSwap = function () {
        var $this = $(this);
        var newSource = $this.data('alt-src');
        $this.data('alt-src', $this.attr('src'));
        $this.attr('src', newSource);
    }

    $(function() {
        $('img[data-alt-src]').each(function() { 
            new Image().src = $(this).data('alt-src'); 
        }).hover(sourceSwap, sourceSwap); 
    });

    var calloutMgr = hopscotch.getCalloutManager();
    calloutMgr.createCallout({
      id: 'attach-icon',
      target: 'attach-btn',
      placement: 'bottom',
      title: 'Now you can share images &amp; files!',
      content: 'Share a project you\'re proud of, a photo from a recent event, or an interesting presentation.'
    });
});

