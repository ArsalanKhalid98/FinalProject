// checks if the site is scrolled more than 100px from the top, if not the up button stays hidden
window.onscroll = function () {
	magic()
};

function magic() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("toppen").style.display = "block";
    } else {
        document.getElementById("toppen").style.display = "none";
    }
}
// when you click the up button it triggers the function which then takes you to the top of the page
function tiptopp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// deletes what ever is in the email slot, gives the costumer the idea that something has happend and the site works
function slett() {
	document.getElementById("email").value = "";
}

// Added function to the input so it reacts to when ENTER is pressed and not only the button.
function handle(e) {
    if (e.keyCode === 13) {
        myBtn.click();
    }
}

function navpopoff(){
    var x = document.getElementById("knapper");
    if (x.className === "knapper") {
        x.className = "dropdown";
    } else {
        x.className = "knapper";
    }
}

function closemenu() {
    var x = document.getElementById("knapper");
    if(x.className === "dropdown")x.className = "knapper";
}

// Snackbar that appears when user enters email
function snackFunction() {

        var snack = document.getElementById("snackbar");
        snack.className = "show";
        setTimeout(function () {
            snack.className = snack.className.replace("show", "");
        }, 3000);
    
    
}

// Font-size changer

const topp = document.querySelector("body");
const changer = document.querySelector("#changer");

function changefont() {
    if(topp.style.fontSize == "large") {
        changer.innerHTML = "text extra large";
        topp.style.fontSize = "x-large";
    }
    else if(topp.style.fontSize == "x-large") {
        changer.innerHTML = "Text small";
        topp.style.fontSize = "initial";
    } else {
        changer.innerHTML = "text large";
        topp.style.fontSize = "large";
    }

}
  var readMore = document.getElementById("readMore");
  var more = document.getElementById("moreText");
  var btn = document.getElementById("Btn");
    btn.addEventListener("click", readmoreReadless);
  var btn1 = document.getElementById("Btn1");
    btn1.addEventListener("click", readmoreReadless);
//Read more/Read less function 
function readmoreReadless() {


  if (readMore.style.display === "none") {
    readMore.style.display = "inline";
    btn.innerHTML = "Read more"; 
    more.style.display = "none";
    btn1.style.visibility = "hidden";  
  } else { 
    readMore.style.display = "none";
    btn.innerHTML = "Read less"; 
    more.style.display = "inline";
    btn1.style.visibility = "visible";
  }
}