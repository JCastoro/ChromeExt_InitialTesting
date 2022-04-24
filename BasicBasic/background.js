console.log("Background Running");

//listens for the default button to be clicked
//chrome.action.openPopup(); <- this actually isnt implemented by chrome yet....
//https://github.com/GoogleChrome/developer.chrome.com/issues/204


//setting up storage

//basic storage setup
chrome.storage.local.set({test: "storedInfo"}, function() {
    console.log('URL Saved as : ' + "test");
  });


// Background listening for message
let surveyInfo = {
    emotion: "Youtube.com",
    time: "12",
    activeTab: "placeholder"
}



  var msgNum = 0;
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab.url);
        if (request.url === "Youtube.com"){
            console.log("message recieved from content page");
            surveyInfo.activeTab = sender.tab.url;

            chrome.storage.local.set({key: surveyInfo.activeTab}, function() {
                console.log('URL Saved as : ' + surveyInfo.activeTab);
              });

            msgNum +=1;
        }
        if (request.activeTab === "placeholder"){
            console.log("message recieved from POPUP page");
        }
     }
  );

  //basic storage retrieval
    chrome.storage.local.get(['test'], function(result) {
    console.log('Stored Value currently is ' + result.test);
  });

  chrome.storage.local.get(['test'], function(result) {
    console.log('Stored Value currently is ' + result.test);
  });

