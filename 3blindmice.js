
var userMsg = document.getElementById("userMessage");

var msgBox = document.getElementById("messageBox");

var msgString = "";



userMsg.addEventListener("keydown", function whenEnter (keypress) {
	if (keypress.keyCode === 13) {
		var message = userMsg.value;
		stringMessage(message);

		function stringMessage(message) {
			msgString += "<div>" + message + "<button id='delete'>Delete</button></div>";
			msgBox.innerHTML = msgString;
		}

		clearInput();

			function clearInput() {
			userMsg.value = "";
		}
	}
});
