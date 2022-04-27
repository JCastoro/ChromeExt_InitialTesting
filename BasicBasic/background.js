console.log("Background Running");
//do i need to check if this exists in the background storage first?? Will this wipe storage
//after chrome is closed??
let links_seen = [];

//basic storage setup
chrome.storage.local.set({links: links_seen}, function() {
    console.log('Storage setup:' + links_seen);
  });

//checking if storage setup correctly
chrome.storage.local.get(['links'], function(result) {
  console.log('Stored Values currently are ' + result.links);
});

//When background recieves a message from content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //storing content pages URL
    currContentPageURL = sender.tab.url;
    //if sender URL is in our stored list
    if (request.url === "Youtube.com"){//this is placeholder for now
      //increment rabbitHole counter by 1
    }        
    //if rabbithole counter > (some tolerance)
    chrome.storage.local.get(['links'], function(result) {
      let numLinksFollowed = result.links.length;
      console.log(numLinksFollowed);
      if(numLinksFollowed > 1){
        chrome.tabs.create({
          url: 'popupWindow/Test_popup.html'
        });
      }
    });

  }
);

