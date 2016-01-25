// http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
var doClick = function(className) {
    var node = document.getElementsByClassName(className)[0];
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', true, false);
    node.dispatchEvent(evt);
};

// Simulate clicking on elements by class name
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.cmd == "play-pause")
            doClick("playControl");
        else if(request.cmd == "next")
            doClick("skipControl__next");
        else if(request.cmd == "prev")
            doClick("skipControl__previous");
});

// This will be received by background.js so it can get soundcloud's tab id
chrome.runtime.sendMessage({msg: "foo"});