var tabid = -1;

// Forward command events to content script
chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.sendMessage(tabid, {cmd: command});
});

// Get soundcloud tab id
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(tabid == -1)
            tabid = sender.tab.id;
});