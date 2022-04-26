console.log("Background Running");

//listens for the default button to be clicked
//chrome.action.openPopup(); <- this actually isnt implemented by chrome yet....
//https://github.com/GoogleChrome/developer.chrome.com/issues/204


//setting up storage
//do i need to check if this exists in the background storage first?? Will this wipe storage
//after chrome is closed??
let links_seen = [];
//links_seen.push("3");

//basic storage setup
chrome.storage.local.set({links: links_seen}, function() {
    console.log('Storage setup:' + links_seen);
  });

chrome.storage.local.get(['links'], function(result) {
  console.log('Stored Values currently are ' + result.links);
});

  

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      //storing content pages URL
        currContentPageURL = sender.tab.url;
        
        //if sender URL is in our stored list
        if (request.url === "Youtube.com"){
          //increment rabbitHole counter by 1

          
        }

        //if rabbithole counter > (some tolerance)
        chrome.storage.local.get(['links'], function(result) {
          let numLinksFollowed = result.links.length;
          console.log(numLinksFollowed);
          if(numLinksFollowed > 4){
            chrome.tabs.create({
              url: 'popupWindow/Test_popup.html'
            });
          }
        });

     }
  );

