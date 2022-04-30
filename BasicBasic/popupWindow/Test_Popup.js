
//need to wait for dom to load
window.addEventListener("load", function () {
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


        //pulling emotion data from memory
    // chrome.storage.local.get(['emotion'], function(result) {
    //     var emotionList = result;
    //     console.log(emotionList);
    //     console.log(emotionList[0]);

    //     console.log("length: "+ emotionList);

    //     emotionList.forEach((item)=>{
    //         console.log(item);
    //         })
    //     });

    //listen for if an emotion button is clicked on HTML
    // let b1 = document.getElementById("1");
    // b1.addEventListener("click",function (){
    //     alert("pressed");
    // });

    var buttons = this.document.getElementsByClassName("emotion");
    //console.log(buttons);


    //if 1 is pressed WORKING
    buttons[0].addEventListener("click",function (){
        console.log(this.value);
        //let emotionResponse = this.value;
        let currStorage = 1;
        //get the storage object
        chrome.storage.local.get(['emotions'], function(result) {
            //locally save storage list
            var data = result.emotions;
            data.push(currStorage);
            console.log(data);

            //update the list that is being stored
            chrome.storage.local.set({emotions: data}, function() {
                console.log('Storage updated to ' + data);
                console.log(data.length);
            });
        });
    });




    // for(var b in buttons){
    //     //console.log(buttons[b]);
    //     var curEle = buttons[b];
    //     curEle.addEventListener("click",function (){
    //         console.log(this.value);
    //         let emotionResponse = this.value;
    //         let currStorage = [];
    //         let newStorage = [];


    //         //get the storage object
    //         chrome.storage.local.get(['emotions'], function(result) {
    //             //locally save storage list
    //             currStorage = result.emotion_surveys;
    //             //update the list that is being stored
    //             newStorage = [...currStorage, pageURL];

    //             chrome.storage.local.set({emotions: newStorage}, function() {
    //                 console.log('OLD Storage Was ' + currStorage);
    //                 console.log('Storage updated to ' + newStorage);
    //             });

    // });



    //     });
    // }

   
    
        //add answer to correct response list
        
        
});

// Will have 5 buttons in HMTL with listeners in background script for emotional survey