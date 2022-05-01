// This is the code which is run after content loads and lets us interact with the content
// Here is where we could store which links youtube is showing us, i.e parse the HTML to determine which 
// videos are on the suggested bar.

//bakground script 
// is listening for events which happen when using chrome as a piece of software itself 
console.log("Chrome Extension Active V_2.1!");

let currStorage = [];
let newStorage = [];
let pageURL = document.URL;
var doc = window.document;
//will get the elements for the video themselves
//iif you wait for the pop-out it wont work. 
var contents = doc.getElementsByClassName("style-scope ytd-rich-item-renderer");

var tabInfo = {
  url: "Youtube.com",
  reason: "",
  RHLen: 0
}

for(var i = 0; i < contents.length; i++) {
  contents[i].addEventListener("click", (event)=>{
    Rhole+=1;
  });
}

//gets HTML video element for main video
let mainVid = document.getElementsByClassName("video-stream html5-main-video")[0];
var Rhole = 0;


//IF the main video changes, AKA user is staying in rabbithole.
mainVid.addEventListener('loadeddata', (event) => {

  let pageURL = document.URL;
  tabInfo.reason = "rabbit";
  tabInfo.url = pageURL;
  tabInfo.RHLen +=1;

  chrome.runtime.sendMessage(tabInfo, function(response) {
    console.log("Telling background we have entered rabbitHole");

  });

  
  
  
  //get the storage object
//   chrome.storage.local.get(['links'], function(result) {
//     //locally save storage list
//     currStorage = result.links;
//     //update the list that is being stored
//     newStorage = [...currStorage, pageURL];

//     chrome.storage.local.set({links: newStorage}, function() {
//       console.log('OLD Storage Was ' + currStorage);
//       console.log('Storage updated to ' + newStorage);
//       });

//   });
});

//message passed to background
  // chrome.runtime.sendMessage(tabInfo, function(response) {
  //   console.log("message sent");

  //   //storage object set as new appended list
  //   // FOR OUR application it can just set a new list as the rabbithole Links
  //       //TODO: I can move this outside of this nested get call I think
  //   chrome.storage.local.set({links: newStorage}, function() {
  //     //console.log('Storage updated to ' + newStorage);
  //     //console.log('OLD Storage Was ' + currStorage);
  //     });
  // });



