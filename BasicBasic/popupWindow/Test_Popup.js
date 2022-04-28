
console.log("did test_popup file run");


//need to wait for dom to load
window.addEventListener("load", function () {
    // do things after the DOM loads fully
    console.log("Everything is loaded");

    //pulling stored links from memory
    chrome.storage.local.get(['links'], function(result) {
        var visitedSites = result.links;
        console.log("length: "+ visitedSites.length);

        let list = document.getElementById("urlList");
    
        visitedSites.forEach((item)=>{
            console.log(item);
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
          })
        });
  
    //listen for if an emotion button is clicked on HTML
    chrome.storage.local.get(['emotion'], function(result) {
        
    
    });
    
        //add answer to correct response list
        
        
});

// Will have 5 buttons in HMTL with listeners in background script for emotional survey