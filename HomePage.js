if (window.openDatabase) {

    var mydb = openDatabase("clubs_db", "0.1", "Database of Clubs Registered", 1024 * 1024);
   
    mydb.transaction(function(t) {
        t.executeSql("CREATE TABLE IF NOT EXISTS clubsdata (email TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, clubname TEXT, purpose TEXT, events TEXT, fundraisers TEXT, category INTEGER, image TEXT)"); //creates table 
	t.executeSql("CREATE TABLE IF NOT EXISTS users (email TEXT PRIMARY KEY, firstname TEXT, lastname TEXT, password TEXT)"); //creates table 

    });
} else {
    alert("WebSQL is not supported by your browser!");
}


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";  
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}


function updateName(transaction, results) {
    //initialise the listitems variable
    var name = "";
    //get the car list holder ul
    var pop = document.getElementById("pop");
    //clear cars list ul
    pop.innerHTML = "";
    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);
        pop.innerHTML = row.clubname;
    }
}

function updateImage(transaction, results) {
    //initialise the listitems variable
    var name = "";
    //get the car list holder ul
    var imgg = document.getElementById("imgg");
    //clear cars list ul
    imgg.src = "";
    var i;
    //Iterate through the results
    for (i = 0; i < results.rows.length; i++) {
        //Get the current row
        var row = results.rows.item(i);
        var source = row.image.substr(12);
        imgg.src = source;
    }
}

function Academic() {
    var catt1 = ["Academic Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    document.getElementById("thumbnail").className= "unhidden";
	 
    if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 4", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 4", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	
	else {
		alert("db not found!");
	}	
}




function Service() {
    var catt1 = ["Service Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    document.getElementById("thumbnail").className= "unhidden";
    /*var src = document.getElementById("imgg").src;*/
    if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 1", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 1", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}	
}



function Other() {
    var catt1 = ["Other Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 7", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 7", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}
}
function SGA() {
    var catt1 = ["Student Government Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
     if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 3", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 3", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}
}
function Social() {
    var catt1 = ["Social Awareness Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 6", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 6", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}
}
function Honor() {
    var catt1 = ["Honor Societies", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
    document.getElementById("thumbnail").className= "unhidden"
    if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 2", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 2", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}	
}
function Hobby() {
    var catt1 = ["Hobby Clubs", ""];
    document.getElementById("test").innerHTML = catt1[0];
    document.getElementById("test2").innerHTML = catt1[1];
        document.getElementById("thumbnail").className= "unhidden";
    if (mydb) {
		mydb.transaction(function(t) {
		t.executeSql("SELECT clubname FROM clubsdata WHERE category = 5", [], updateName);
		t.executeSql("SELECT image FROM clubsdata WHERE category = 5", [], updateImage);
		/*src.innerHTML = dataimg;*/
		})
}	else {
		alert("db not found!");
	}
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
