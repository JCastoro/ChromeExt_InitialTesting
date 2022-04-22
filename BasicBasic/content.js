// This is the code which is run after content loads and lets us interact with the content
// Here is where we could store which links youtube is showing us, i.e parse the HTML to determine which 
// videos are on the suggested bar.

//bakground script 
// is listening for events which happen when using chrome as a piece of software itself 
// Where we    

console.log("Chrome Extension Active V_2.1!");



//message creation
let tabInfo = {
    url: "Youtube.com",
    time: "12"
}


//message passing
  chrome.runtime.sendMessage(tabInfo, function(response) {
    console.log("message sent");
  });


// --------------


  let paragraphs = document.getElementsByTagName('p');
//listening for content script to recieve a message
chrome.runtime.onMessage.addListener(gotMessage);

//what it should do once it recieves the message
function gotMessage(message, sender, sendResponse){ 
    console.log(message.txt);
    //doing something on button press
    for (let elem of paragraphs){
       elem.style.color = '#FF55FC';
   }
}


