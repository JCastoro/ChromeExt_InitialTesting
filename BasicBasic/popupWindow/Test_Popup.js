
//need to wait for dom to load
window.addEventListener("load", function () {
    // do things after the DOM loads fully
    //console.log("Everything is loaded");

    //pulling stored links from memory
    chrome.storage.local.get(['links'], function(result) {
        var visitedSites = result.links;
        //console.log("length: "+ visitedSites.length);
        let list = document.getElementById("urlList");
    
        visitedSites.forEach((item)=>{
            console.log(item);
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
          })
        });
  
    //listen for if an emotion button is clicked on HTML
    // let b1 = document.getElementById("1");
    // b1.addEventListener("click",function (){
    //     alert("pressed");
    // });

    var buttons = this.document.getElementsByClassName("emotion");
    //console.log(buttons);

    for(var b in buttons){
        //console.log(buttons[b]);
        var curEle = buttons[b];
        curEle.addEventListener("click",function (){
            console.log(this.value);
            let emotionResponse = this.value;
            let currStorage = [];
            let newStorage = [];


            //get the storage object
            chrome.storage.local.get(['emotions'], function(result) {
                //locally save storage list
                currStorage = result.emotion_surveys;
                //update the list that is being stored
                newStorage = [...currStorage, pageURL];

                chrome.storage.local.set({emotions: newStorage}, function() {
                    console.log('OLD Storage Was ' + currStorage);
                    console.log('Storage updated to ' + newStorage);
                });

    });



        });
    }

    chrome.storage.local.get(['emotion'], function(result) {
        
    });
    
        //add answer to correct response list
        
        
});

// Will have 5 buttons in HMTL with listeners in background script for emotional survey