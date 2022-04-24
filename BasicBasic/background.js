
console.log("Background Running");

//listens for the default button to be clicked
//chrome.action.openPopup(); <- this actually isnt implemented by chrome yet....
//https://github.com/GoogleChrome/developer.chrome.com/issues/204


// Background listening for message
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("message recieved");
        console.log(sender.tab.url)
      if (request.url === "Youtube.com")
        console.log("URL from content page is: "+ request.url);
    }
  );