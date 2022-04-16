
console.log("Background Running");

//listens for the default button to be clicked
chrome.browserAction.onClicked.addListener(buttonClicked);
clickNum = 0;

function buttonClicked(tab){
    clickNum +=1;    
    console.log("Button clicked " + clickNum);


    //sending a message from background aka general chrome to 
    //content which is what is happening on current tab
    let message = {
        txt: "test"
    }
    //sends a message to the tab that was active when button was clicked  
    chrome.tabs.sendMessage(tab.id,message)

}  