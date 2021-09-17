var count =[9,12,9];
var countElement =[document.querySelector("#count-1"),
document.querySelector("#count-2"),
document.querySelector("#count-3")] ;

function like(id){
    count[id] ++;
    countElement[id].innerHTML = " "+ count[id]  + " Like(s)" ;
}
