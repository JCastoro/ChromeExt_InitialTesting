
//need to wait for dom to load



window.addEventListener("load", function () {
    updateHTML();
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


    var buttons = this.document.getElementsByClassName("emotion");


    //button setup
    for(var b=0;b<(buttons.length);b++){
        
        let curEle = buttons[b];
        curEle.addEventListener("click",function (){
            updateHTML();
            for(var b=0;b<(buttons.length);b++){
                buttons[b].disabled = "disabled";
            }
            
            let butVal = this.value;
            let currStorage = butVal;
         
            //saves selected button to storage
            saveToStorage(currStorage);
        });
    }
      
        
});



function updateHTML(){
    chrome.storage.local.get(['emotions'], function(result) {
        let data = result.emotions;
        let arrLen = data.length;
        //console.log(arrLen);
        var sum=0;
        for(var entry in data){
            let val = parseInt(data[entry]);
            //console.log(val);
            sum+= val;
        }
        var averageEmotion = sum/arrLen;
        var text = "Average Emotional score while in rabbit hole: " + averageEmotion.toString();
    
        var paragraph = document.getElementById("emotionScore");
    
        if(averageEmotion)
            paragraph.innerHTML = text;
        console.log("Current Averaeg: " + averageEmotion);
    
    });
}

//takes an integer and adds it to emotion storage.
function saveToStorage(dataToSave){
    chrome.storage.local.get(['emotions'], function(result) {
        //locally save storage list
        var data = result.emotions;
        data.push(dataToSave);


        //update the list that is being stored
        chrome.storage.local.set({emotions: data}, function() {
            //console.log('Storage updated to ' + data);
            //console.log(data.length);
        });
    });
}
