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

// Added a eventlistener to the form so it reacts to when ENTER is pressed and not only the button.
const form = document.querySelector('form');
const submitButton = form.querySelector('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

