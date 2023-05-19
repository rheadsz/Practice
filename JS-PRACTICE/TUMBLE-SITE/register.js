

//DARK MODE



function onload() {
   
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
    localStorage.setItem("theme", "dark-mode");
    if (localStorage.getItem('darkmode') === 'true'){
        var element1 = document.getElementById("reg-header-id");
        element1.style.backgroundColor = "#343a40";
        var element2 = document.getElementById("form");
        element2.style.backgroundColor = "#212529";
       
    }
  




}


function validate(){  
    var username = document.getElementById("uname");
    var password = document.getElementById("pwd");
    var email = document.getElementById("email");
    var retypePassword = document.getElementById("rpwd");

    if(username.value.trim()=="" || password.value.trim()=="" || email.value.trim()==""){ //trim() will display alert if whiespace is entered for username & password
        alert("No blanks allowed");

        return false;   //so that we dont get redirected to the next page
    }
    
    else if(password.value.length < 5){
        alert("password too short");
        return false;

    }
    else if(retypePassword.value != password.value ){
        alert("password mismatch");
        return false;
    }
   
    
    else{
        true;
      }
    }  