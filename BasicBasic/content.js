console.log("Chrome Extension Active!");

let paragraphs = document.getElementsByTagName('p');

for (let elem of paragraphs){
    elem.style.color = '#FF55FC';
}

// for ( i=0;i< paragraphs.length;i++){
//     paragraphs[i].style.color = '#FF55FC';
//     paragraphs[i].style['background-color'] = "green";
// }