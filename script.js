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
// opens or closes the navbar
function navpopoff(){
    var x = document.getElementById("knapper");
    if (x.className === "knapper") {
        x.className = "dropdown";
    } else {
        x.className = "knapper";
    }
}
// closes the navigation bar
function closemenu() {
    var x = document.getElementById("knapper");
    if(x.className === "dropdown")x.className = "knapper";
}

// Snackbar that appears when user enters email from W3
function snackFunction() {

        var snack = document.getElementById("snackbar");
        snack.className = "show";
        setTimeout(function () {
            snack.className = snack.className.replace("show", "");
        }, 3000);
    
    
}

// Font-size changer

const topp = document.querySelector("#main");
const changer = document.querySelector("#changer");

function changefont() {
    if(topp.style.fontSize == "large") {
        changer.innerHTML = "Text extra large";
        topp.style.fontSize = "x-large";
    }
    else if(topp.style.fontSize == "x-large") {
        changer.innerHTML = "Text small";
        topp.style.fontSize = "initial";
    } else {
        changer.innerHTML = "Text large";
        topp.style.fontSize = "large";
    }

}

var script = document.createElement('script');
 
script.src = 'https://code.jquery.com/jquery-1.10.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script); 

$(document).ready(function () {
    $('.nav-toggle').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Read More');
            } else {
                toggle_switch.html('Read Less');
            }
        });
    });

});