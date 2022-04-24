// This is the code which is run after content loads and lets us interact with the content
// Here is where we could store which links youtube is showing us, i.e parse the HTML to determine which 
// videos are on the suggested bar.

//bakground script 
// is listening for events which happen when using chrome as a piece of software itself 


console.log("Chrome Extension Active V_2.1!");

//message creation
let tabUrl = chrome.tabs.tab.url;
let tabID = chrome.tabs.tab.url;

let tabInfo = {
    url: tabUrl,
    ID: tabID
}

//message passed to background
  chrome.runtime.sendMessage(tabInfo, function(response) {
    console.log("message sent");
  });




