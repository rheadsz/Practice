
/*function SubForm (){
    $.ajax({
        url:"https://api.apispreadsheets.com/data/WQE9GrSM3kGyfjK4/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}*/

function comingSoon() {
    var a,b, myimg;
    myimg = document.getElementById("cmg-soon"); 
    myimg.src = "nfs.jpg";
    a = document.getElementById("cmg-soon-title");
    a.innerHTML = "Need For Speed";
    b = document.getElementById("cmg-soon-desc");
    b.innerHTML = "Need for Speed is a racing game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illegal street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits";

    setTimeout(function () {
        myimg.src = "gta.jpg";
        a.innerHTML = "GRAND THEFT AUTO";
        b.innerHTML = "Grand Theft Auto is a series of action-adventure games created by David Jones and Mike Dailly. Later titles were developed under the oversight of brothers Dan and Sam Houser, Leslie Benzies and Aaron Garbut";
      }, 3000);
    setTimeout(function () {
        myimg.src="among-us.jpg"
        a.innerHTML = "AMONG US";
        b.innerHTML = "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing"
      }, 5000);
    
  }
  comingSoon();
  setInterval(comingSoon, 5000);


var form = document.getElementById('myForm');
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action,{
        method: "POST",
        body: new FormData(document.getElementById("myForm")),
    }).then(
        response => response.json()
    ).then( 
        closeForm(),
        clearItems()
    ).then(html);
});

function openForm() {
    document.getElementById("my-form").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("my-form").style.display = "none";
  }

  function clearItems(){
    document.getElementById("my-uname").value= "";
    document.getElementById("game").value = "";
    document.getElementById("cmt").value= "";

}


function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
  }

  function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    localStorage.setItem("theme", "dark-mode");
    if (localStorage.getItem('darkmode') === 'true'){
        var element2 = document.getElementById("wlc");
        element2.style.color = "white";
        var element3 = document.getElementById("container-1");
        element3.style.backgroundColor = "black";
        var element4 = document.getElementById("container-2");
        element4.style.backgroundColor = "black";
        var element5 = document.getElementById("container-3");
        element5.style.backgroundColor = "black";
        element2.style.textShadow = "3px 3px 0px black";
        var element6 = document.getElementById("myForm");
        element6.style.backgroundColor = "black";
        document.getElementById("my-uname").style.backgroundColor ="rgb(22, 19, 46)";
        document.getElementById("game").style.backgroundColor ="rgb(22, 19, 46)";
        document.getElementById("cmt").style.backgroundColor ="rgb(22, 19, 46)";
        document.getElementById("container").style.backgroundColor = "black";
    }
}