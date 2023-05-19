var num1 = 3;
document.getElementById("num-1").innerHTML = num1;
var num2 = 9;
document.getElementById("num-2").innerHTML = num2;

var displaySum = document.getElementById("sum-el")

function add(){
    var total = num1 + num2;
    displaySum.innerHTML = "SUM: "+total ;   
    
}

function sub(){
    var diff = num1 - num2;
    displaySum.innerHTML = "DIFF: "+diff ;
}

function mul(){
    var product = num1 * num2;
    displaySum.innerHTML = "PRODUCT: "+product ;
}

function div(){
    var div = num1 / num2;
    displaySum.innerHTML = "DIV: "+div;
}

