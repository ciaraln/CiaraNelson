var firstname = prompt("Hi there! What's your first name>");
var lastname = prompt("What's your last name>");
var output = document.querySelector('#greeting');

if(firstname && lastname){
output.innerHTML = "<p> Thanks for visiting," + firstname + " " + lastname +".</p>";
} else {
output.innerHTML = "<p> Please tell us youmr name! </p>"
}
