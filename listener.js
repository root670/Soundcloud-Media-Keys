// http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
var doClick = function(className) {
    // Find the element
    var node = document.getElementsByClassName(className)[0];

    // Trigger a mouse click event
    if ( document.createEvent ) {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('click', true, false);
        node.dispatchEvent(evt);    
    } else if( document.createEventObject ) {
        node.fireEvent('onclick') ; 
    } else if (typeof node.onclick == 'function' ) {
        node.onclick(); 
    }
};

// Simulate clicking on soundcloud page
document.addEventListener('scListenerEvt', function (e) {
    if(e.detail === "play-pause")
        doClick("playControl");
    else if(e.detail === "next")
        doClick("skipControl__next");
    else if(e.detail === "prev")
        doClick("skipControl__previous");
});