function onResponseCompleted(details) {

    if (details.tabId > 0) {
       chrome.pageAction.setIcon({tabId: details.tabId, path: "19.png" }, 
        function() { console.log("set icon for tab: " + details.tabId)});
      chrome.pageAction.show(details.tabId);
    }
   
};

chrome.webRequest.onCompleted.addListener(onResponseCompleted, 
  {urls: ["<all_urls>"], types: ["main_frame"]}, ["responseHeaders"]);

