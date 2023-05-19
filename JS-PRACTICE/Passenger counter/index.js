var count = 0;
var saveEl = document.getElementById("save-el")
function incrementCount(){
    count += 1;
    document.getElementById("count").innerHTML = count;
}
function save(){
    var display = count + " - ";
    saveEl.innerHTML += display;
    document.getElementById("count").innerHTML= 0;
    count = 0;

}
