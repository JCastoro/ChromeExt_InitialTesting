console.log("Background Running");
//do i need to check if this exists in the background storage first?? Will this wipe storage
//after chrome is closed??
let links_seen = [];
let emotion_surveys = [];


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
    const RABBIT_HOLE_LIMIT = 2;
    //storing content pages URL
    currContentPageURL = sender.tab.url;
    //if sender URL is in our stored list

    console.log("RHLEN"+ request.RHLen);

    if (request.RHLen > RABBIT_HOLE_LIMIT){
      //increment rabbitHole counter by 1
      chrome.tabs.create({
        url: 'popupWindow/Test_popup.html'
      });
    } 
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