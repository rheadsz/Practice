
var sum = 0;
var hasBlackJack = false;
var isAlive = false;
var message = " ";
var MessageEl = document.getElementById("message-el");
var SumEl = document.getElementById("sum-el");
var CardsEl = document.querySelector("#cards-el");
var cards = [];


//object creation
var player = {
    name : "Rhea",
    chips: 145
}
var playerEl = document.getElementById("player-el");
playerEl.innerHTML = player.name + ": $"+player.chips; //objectName.key


function getRandomNumber(){
    var num = Math.floor(Math.random()*13) + 1;

    if (num === 1){
        return 11;
    }
    else if(num === 11 || num === 12 || num === 13){
        return 10;
    }else{
        return num;
    }
}
function startGame(){
    isAlive = true;
    var firstCard = getRandomNumber();
    var secondCard = getRandomNumber();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];

    renderGame();
}

function renderGame(){
   

    if(sum <= 20){
        message = "Do you want to pick another card? ^.^";
        
    }
    else if(sum === 21){
        message = "YOU HAVE A BLACKJACK $o$";
      
        hasBlackJack = true;
        
    }
    else{
        message = "You're out of the game!! :c";
       
        isAlive = false;
      
    }
    MessageEl.innerHTML = message;
    SumEl.innerHTML = "Sum: "+sum;
    CardsEl.innerHTML = "Cards: ";

    for(var i=0; i< cards.length; i++){
        CardsEl.innerHTML += cards[i] + " "; 
    }
}

function newCard(){
    //alert("Draw new card");
    if( isAlive === true && hasBlackJack === false){
        var card = getRandomNumber();
        sum += card;
        cards.push(card);
        renderGame();
    }
    
}