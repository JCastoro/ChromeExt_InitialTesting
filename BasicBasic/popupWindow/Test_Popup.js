
console.log("did test_popup file run");

//need to wait for dom to load
window.addEventListener("load", function () {
    // do things after the DOM loads fully
    console.log("Everything is loaded");
    document.getElementById("demo1").innerHTML = "Hello RaghuRamKondeti, This is Pavan Kumar Sake";
  });

// Will have 5 buttons in HMTL with listeners in background script for emotional survey