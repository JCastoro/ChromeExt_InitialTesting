// This is the code which is run after content loads and lets us interact with the content
// Here is where we could store which links youtube is showing us, i.e parse the HTML to determine which 
// videos are on the suggested bar.

//bakground script 
// is listening for events which happen when using chrome as a piece of software itself 


console.log("Chrome Extension Active V_2.1!");

//message creation
let tabInfo = {
    url: "Youtube.com",
    time: "12"
}


//message passed to background
  chrome.runtime.sendMessage(tabInfo, function(response) {
    console.log("message sent");
  });


  chrome.storage.local.get(['links'], function(result) {
    console.log('Stored Values currently are ' + result.links);
  });