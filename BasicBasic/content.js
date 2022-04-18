// This is the code which is run after content loads and lets us interact with the content
// Here is where we could store which links youtube is showing us, i.e parse the HTML to determine which 
// videos are on the suggested bar.

//bakground script 
// is listening for events which happen when using chrome as a piece of software itself 
// Where we    

console.log("Chrome Extension Active V_2.1!");


let paragraphs = document.getElementsByTagName('p');

chrome.runtime.onMessage.addListener(gotMessage);



//i think send the url from here?
window.addEventListener('load',pageLoaded);

//gets this tabs id
function pageLoaded(){    
    console.log("pageLoaded");
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
       var activeTab = tabs[0];
       var activeTabId = activeTab.id;
       console.log("tabID: " + activeTabId);
   });



    let pageName ="test"; //will change to current page name
    let message = {
        text: pageName
    }
}


function gotMessage(message, sender, sendResponse){ 
     console.log(message.txt);
     
     //doing something on button press
     for (let elem of paragraphs){
        elem.style.color = '#FF55FC';
    }
}


