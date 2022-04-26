console.log("Background Running");

//listens for the default button to be clicked
//chrome.action.openPopup(); <- this actually isnt implemented by chrome yet....
//https://github.com/GoogleChrome/developer.chrome.com/issues/204


//setting up storage
//do i need to check if this exists in the background storage first?? Will this wipe storage
//after chrome is closed??
let links_seen = ["url"];
links_seen.push("2");

//basic storage setup
chrome.storage.local.set({links: links_seen}, function() {
    console.log('Storage setup');
  });

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      //storing content pages URL
        currContentPageURL = sender.tab.url;
        if (request.url === "Youtube.com"){
            console.log("Adding " + currContentPageURL + "   SPACE  to the storage");
            //I COULD do this so that content page updates memory I think...
            //get the storage object
            chrome.storage.local.get(['links'], function(result) {
              links_seen = result.links;
              //update the list
              links_seen.push(currContentPageURL);
              console.log('Stored Values currently are ' + result.links);
            });
            
            //set storage again
            chrome.storage.local.set({links: links_seen}, function() {
              console.log('Storage updated to ' + links_seen);
              });
        }
     }
  );

  //basic storage retrieval
    chrome.storage.local.get(['links'], function(result) {
    console.log('Stored Values currently are ' + result.links);
  });
