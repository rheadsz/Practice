let fighters = ["🖐", "✌", "✊"]
let points = 100;
let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")
let point = document.getElementById("score");
point.innerHTML = points;
function startGame(){
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let randomIndexOne = Math.floor( Math.random() * fighters.length );
    let randomIndexTwo = Math.floor( Math.random() * fighters.length );
    stageEl.innerHTML = fighters[randomIndexOne] + " vs " + fighters[randomIndexTwo];
    
    //conditions
    if(fighters[randomIndexOne]===fighters[0] && fighters[randomIndexTwo]===fighters[1]){
        point.innerHTML = points++;
    }else if(fighters[randomIndexOne]===fighters[0] && fighters[randomIndexTwo]===fighters[2]){
        point.innerHTML = points--;
    }
    else if(fighters[randomIndexOne]===fighters[1] && fighters[randomIndexTwo]===fighters[2]){
        point.innerHTML = points++;
    }else if(fighters[randomIndexOne]===fighters[1] && fighters[randomIndexTwo]===fighters[0]){
        point.innerHTML = points--;
    }
    else if(fighters[randomIndexOne]===fighters[3] && fighters[randomIndexTwo]===fighters[0]){
        point.innerHTML = points++;
    }else if(fighters[randomIndexOne]===fighters[3] && fighters[randomIndexTwo]===fighters[1]){
        point.innerHTML = points--;
    }else{
            startGame();
    }
    
}

