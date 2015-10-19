var userMsg = document.getElementById("userMessage");

var msgBox = document.getElementById("messageBox");

var msgString = "";

userMsg.addEventListener("keydown", function whenEnter (keypress) {
	if (keypress.keyCode === 13) {
		msgString += "<div>" + userMsg.value + "</div>";
		console.log("msgString ", msgString);
		msgBox.innerHTML = msgString;
		msgString = '';
	}
});

