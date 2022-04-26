console.log("Background Running");

//listens for the default button to be clicked
//chrome.action.openPopup(); <- this actually isnt implemented by chrome yet....
//https://github.com/GoogleChrome/developer.chrome.com/issues/204


//setting up storage
let dummy = {
    url: "test",
    tabID: "test"
};

chrome.storage.local.set({"tabList": "STOREDVALUE"}, function() {
    console.log('storage setup');
  });


// Background listening for message
let surveyInfo = {
    emotion: "Youtube.com",
    time: "12",
    activeTab: "placeholder"
}


  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab.url);
        if (request.url === "Youtube.com"){
            console.log("message recieved from content page");
            surveyInfo.activeTab = sender.tab.url;
        }

        if (request.activeTab === "placeholder"){
            console.log("message recieved from POPUP page");
        }
     }
  );

  //basic storage retrieval
    chrome.storage.local.get(["tabList"], function(result) {
    console.log('Stored Value currently is ' + result.tabList);
  });


