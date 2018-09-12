function colorChange(){

let today = new Date();
let hour = today.getHours();
if (hour < 10) {
	hour = "0" + hour;
}

let min = today.getMinutes();
if (min < 10) {
	min = "0" + min;
}

let sec = today.getSeconds();
if (sec < 10) {
	sec = "0" + sec;
}

let color = "#" + hour + "" + min + "" + sec;
let x = document.getElementsByTagName("BODY")[0];
    x.style.backgroundColor = color;

document.getElementById("clock").innerHTML = color;
 setTimeout("colorChange()",1000)
}

window.onload = colorChange;