// This is the code which is run after content loads and lets us interact with the content
// Here is where we could store which links youtube is showing us, i.e parse the HTML to determine which 
// videos are on the suggested bar.

//bakground script 
// is listening for events which happen when using chrome as a piece of software itself 
console.log("Chrome Extension Active V_2.1!");

let currStorage = [];
let newStorage = [];
let pageURL = document.URL;

var tabInfo = {
  url: "Youtube.com",
  reason: ""
}

//gets HTML video element for main video
let mainVid = document.getElementsByClassName("video-stream html5-main-video")[0];

mainVid.addEventListener('loadeddata', (event) => {
  console.log("VideoLoaded");
  let pageURL = document.URL;
  console.log("content LoadedDOC: " + pageURL);

});

//message creation - This could hold more info



//get the storage object
chrome.storage.local.get(['links'], function(result) {
  console.log('Stored Values currently are ' + result.links);
 
  //locally save storage list
  currStorage = result.links;

  if( currStorage.indexOf(pageURL) > -1 ) {
    tabInfo.reason = "urlSeenBefore";

    chrome.runtime.sendMessage(tabInfo, function(response) {
      console.log("Telling background url has been seen before");

    });


}

  //update the list that is being stored
  newStorage = [...currStorage, pageURL];
});

//message passed to background
  chrome.runtime.sendMessage(tabInfo, function(response) {
    console.log("message sent");

    //storage object set as new appended list
    // FOR OUR application it can just set a new list as the rabbithole Links
        //TODO: I can move this outside of this nested get call I think
    chrome.storage.local.set({links: newStorage}, function() {
      console.log('Storage updated to ' + newStorage);
      console.log('OLD Storage Was ' + currStorage);
      });
  });



