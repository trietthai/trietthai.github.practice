console.log("page loaded...");
function changeUser(){
    userName.innerText ="Someone else";

}
var span = document.querySelector("#move")
function hide(id) {
    var element = document.querySelector(id);
    element.remove();
    span.innerText--;
}   
