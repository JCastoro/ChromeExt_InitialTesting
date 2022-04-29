console.log("Background Running");
//do i need to check if this exists in the background storage first?? Will this wipe storage
//after chrome is closed??
let links_seen = [];
let emotion_surveys = [1];


//basic storage setup
chrome.storage.local.set({links: links_seen}, function() {
    console.log('Link Storage setup');
  });

chrome.storage.local.set({emotions: emotion_surveys}, function() {
  console.log('Emotion Storage setup:');
});

//checking if storage setup correctly
chrome.storage.local.get(['emotions'], function(result) {
  console.log('Stored Values currently are: ' + result.emotions);
});

//When background recieves a message from content page
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    //storing content pages URL
    currContentPageURL = sender.tab.url;
    //if sender URL is in our stored list
    if (request.reason === "urlSeenBefore"){
      //increment rabbitHole counter by 1

      //new page
      // chrome.tabs.create({
      //   url: 'popupWindow/Test_popup.html'
      // });
      

      //popup force open is not yet available 
      //chrome.action.openPopup();
    } 
    console.log('pages URL is: ' + currContentPageURL);
    if (currContentPageURL.includes("https://www.youtube.com/")){
      //increment rabbitHole counter by 1

      //new page
      // chrome.tabs.create({
      //   url: 'popupWindow/Test_popup.html'
      // });

    }      


    //if rabbithole counter > (some tolerance)
    chrome.storage.local.get(['links'], function(result) {
      let numLinksFollowed = result.links.length;
      console.log(numLinksFollowed);
      if(numLinksFollowed > 4){
        // chrome.tabs.create({
        //   url: 'popupWindow/Test_popup.html'
        // });
      }
    });

  }
);

/*
       Plan for emotion

Background listens to content page
- if rabbitHole condition
    fire disruption page with emotional questions
    store results in chrome storage

- if user has not navigated to youtube in a bit
    Fire positive page with emotional questions
    store results in chrome storage


On HTML display the different emotional ratings and show averages for
both categories
*/