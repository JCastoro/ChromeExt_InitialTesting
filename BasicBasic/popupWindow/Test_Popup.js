

console.log("did test_popup file run");

document.getElementById("urlsVisited").setHtml("test");
alert(document.getElementById('emotion_1'));

document.getElementById('emotion_1').addEventListener("click", function(){
    alert("button pressed");
    // console.log("button clicked");
    // chrome.runtime.sendMessage(tabInfo, function(response) {
    //     console.log("message sent from popup");
    //   });
});


// Will have 5 buttons in HMTL with listeners in background script for emotional survey