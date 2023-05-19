
var row = null;

function Submit(){
    var dataEntered = retrieveData();
    var readData = dataFromLocalStorage(dataEntered);
    if (dataEntered === false){
        errormsg();
    }else{
        if(row == null){
            inputData(readData);
            clearItems();
            insertmsg();
        }
        else{
            update();
            clearItems();
            updatemsg();
        }
    }
}

// message displayed on data insert
function insertmsg() {
    var x = document.getElementById("msg");
    x.innerHTML = "Data inserted"
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

// message displayed on data insert
    function updatemsg() {
        var x = document.getElementById("msg");
        x.innerHTML = "Data updated"
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

// message displayed on empty data
function errormsg() {
    var x = document.getElementById("msg");
    x.innerHTML = "Please enter all the fields"
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}


//retrieving data
function retrieveData(){
    var name1 = document.getElementById("name").value;
    var country = document.getElementById("country").value;
    var points = document.getElementById("points").value;
    var arr = [name1, country, points];

    if (arr.includes("")){
        return false;
    }
    else{
        return arr;
    }
}

//reading data from local storage
function dataFromLocalStorage(dataEntered){
    //storing data in local storage
    var n = localStorage.setItem("Name",dataEntered[0]);
    var c = localStorage.setItem("Country",dataEntered[1]);
    var p = localStorage.setItem("Points",dataEntered[2]);

    //getting data from local storage
    var n1 = localStorage.getItem("Name",n);
    var c1 = localStorage.getItem("Country",c);
    var p1 = localStorage.getItem("Points",p);
    var arr = [n1,c1,p1];
    return arr;
}

//insert row with  data
function inputData(readData){
    var myTable = document.getElementById("hof-table");
    var row = myTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button class="btn btn-primary" onclick="edit(this)">EDIT</button>
    <button class="btn btn-primary" onclick="deletee(this)">DELETE</button>`;
}
 
//edit data (chosen data gets displayed on form)
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("country").value = row.cells[1].innerHTML;
    document.getElementById("points").value = row.cells[2].innerHTML;
}

//update
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("country").value;
    row.cells[2].innerHTML = document.getElementById("points").value;
}

//delete row
function deletee(td){
    var ans = confirm("Are you sure you want to delete?");
    if(ans === true){
        row = td.parentElement.parentElement;
        document.getElementById("hof-table").deleteRow(row.rowIndex);
    }
}

function clearItems(){
    document.getElementById("name").value= "";
    document.getElementById("country").value = "";
    document.getElementById("points").value= "";

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
        document.getElementById("title").style.color = "white";
        document.getElementById("title").style.textShadow = "3px 3px 0px black";
        document.getElementById("container").style.backgroundColor = "black";
        document.getElementById("hof-table").style.backgroundColor = "black";
        
    }
}

