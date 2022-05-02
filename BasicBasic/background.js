console.log("Background Running");

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
    const RABBIT_HOLE_LIMIT = 4;

    //storing content pages URL
    currContentPageURL = sender.tab.url;
    
    currContentPageTitle = sender.tab.title;
    console.log(currContentPageURL);
    console.log(currContentPageTitle);

    //updating storage
      //get the storage object
  chrome.storage.local.get(['links'], function(result) {
    //locally save storage list
    currStorage = result.links;
    //update the list that is being stored
    if(currStorage.includes(currContentPageTitle)){
      console.log("repeat");
    }
    else{
    newStorage = [...currStorage, currContentPageTitle];
    chrome.storage.local.set({links: newStorage}, function() {
      // console.log('OLD Storage Was ' + currStorage);
      // console.log('Storage updated to ' + newStorage);
      });
    }
    
  });

    //if we are past rabbit hole limit
    //console.log("RHLEN"+ request.RHLen);
    if (request.RHLen % RABBIT_HOLE_LIMIT == 0){
      //increment rabbitHole counter by 1
      chrome.tabs.create({
        url: 'popupWindow/index.html'
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

--------------------------------------------
            bookmark Setup
chrome.bookmarks.onCreated.addListener(function handleCreated(id, node) {
    console.log(`CREATED tab ${id} on ${node.parentId}`);
});  


let CreateDetails = {
    'title': "TheGoodStuff",
    'parentId': '1'
}

var global = "test";
var bkmrkID;
chrome.bookmarks.create(CreateDetails,function created(result){
        bkmrkID = result.id;
        console.log(bkmrkID);
        global = "inside";
        console.log(global);
});


playing with promises
var mybkmrk = chrome.bookmarks.get(bkmrkID,function(mybkmrk){
    //console.log(mybkmrk.id);//doesnt work
});

function good(){
    console.log("good");
}
function bad(){
    console.log("bad");
}
*/
