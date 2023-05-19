let homescore = 0;
let guestscore = 0;

let home = document.getElementById("home-score");
let guest = document.getElementById("guest-score");

function addOne(){
    homescore += 1;
    home.innerHTML = homescore;
}

function addThree(){
    homescore += 3;
    home.innerHTML = homescore;
}

function addFive(){
    homescore += 5;
    home.innerHTML = homescore;
}
//guest
function addone(){
    guestscore += 1;
    guest.innerHTML = guestscore;
}

function addthree(){
    guestscore += 3;
    guest.innerHTML = guestscore;
}

function addfive(){
    guestscore += 5;
    guest.innerHTML = guestscore;
}

function reset(){
    homescore = 0;
    guestscore = 0;
    home.innerHTML = homescore;
    guest.innerHTML = guestscore;
}