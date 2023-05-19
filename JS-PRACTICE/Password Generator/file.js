const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", 
"5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

var len = characters.length;    //91
var pwd1 = document.getElementById("pwd1");
var pwd2 = document.getElementById("pwd2");



function generatePassword(){

    //pwd is generated only when there is no 15 digit password displayed on the buttons
    if(pwd1.innerHTML.length === 0 && pwd2.innerHTML.length === 0){

   
    
        for(var i=0; i<15; i++){
            var index  = Math.floor(Math.random()*len);
            pwd1.innerHTML += characters[index];
        }

        for(var i=0; i<15; i++){
            var index  = Math.floor(Math.random()*len);
            pwd2.innerHTML += characters[index];
        }
}



}