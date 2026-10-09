const popup_display = document.getElementById("rdrctPp");
const popup_message = document.getElementById("rdrctMsg");
const popup_button = document.getElementById("rdrctMe");

function redirectPopup(url) {
	popup_message.innerHTML = url;
	popup_display.style = "display:block";
	popup_button.setAttribute("onclick","redirectMe('" + url + "');");
}

function redirectMe(url) {
	window.open(url);
	redirectMeLater();
}

function redirectMeLater() {
	popup_display.style = "display:none";
}
