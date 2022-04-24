

console.log("did test_popup file run");

function updateHTML(){
    document.bgcolor="lightblue";
}
document.getElementById("urlsVisited").setHtml("test");
document.getElementById('emotion_1').addEventListener("click", function()
{
    console.log("button clicked");
});


// Will have 5 buttons in HMTL with listeners in background script for emotional survey