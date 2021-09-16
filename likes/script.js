var count = 3;
var countElement = document.querySelector("#count");

function like(){
    count ++;
    countElement.innerText = " "+ count  + " Like(s)" ;
}
