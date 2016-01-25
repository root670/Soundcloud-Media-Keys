// Inject listener script into the soundcloud page
// http://stackoverflow.com/a/9517879
var s = document.createElement('script');
s.src = chrome.extension.getURL('listener.js');
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(s);

// Forward command events to listener.js
// http://stackoverflow.com/a/19312198
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var evt=document.createEvent("CustomEvent");
        evt.initCustomEvent("scListenerEvt", true, true, request.cmd);
        document.dispatchEvent(evt);
});

// This will be received by background.js so it can get soundcloud's tab id
chrome.runtime.sendMessage({msg: "foo"});