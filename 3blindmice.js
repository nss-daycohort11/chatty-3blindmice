
var userMsg = document.getElementById("userMessage");

var msgBox = document.getElementById("messageBox");

var clearAll = document.getElementById("clear");

var msgString = "";

//checking for the enter in user message, if entered put value in variable and call function

userMsg.addEventListener("keydown", function whenEnter (keypress) {

	if (keypress.keyCode === 13) {
		clearAll.removeAttribute("disabled");
		var message = userMsg.value;
		stringMessage(message);



//call function to create data string and button for the messages box

		function stringMessage(message) {
//			msgString += "<div id='entry'>" + message + "<button class='delete'>Delete</button></div>";
//			msgBox.innerHTML = msgString;
			var newElem = document.createElement('div');  //creates new div node
            newElem.innerHTML = message + "<button class='delete'>Delete</button>";
            newElem.setAttribute("id", "entry");
            msgBox.appendChild(newElem);
		}

//call this function to clear the input in the enter message box

		clearInput();

			function clearInput() {
			userMsg.value = "";
		}
	}
});

//check to see if the delete button in the messages box has been clicked.  if true, delete the string from the msgBox.innerHTML

document.querySelector("body").addEventListener("click", function(event) {
	if (event.target.className === "delete") {
		console.log("you clicked on a delete button");
	  // Delete div element including message and button
	  console.log("parentNode ", event.target.parentNode)
	   event.target.parentNode.remove();
	}
});

// Clear all messages on the board

clearAll.addEventListener("click", function() {
	console.log("clearing input");
	msgBox.innerHTML = "";
	document.getElementById("clear").checked = false;
	clear.setAttribute("disabled", true);
});

var allThings = document.getElementById("container");

// var messBoxBorder = document.getElementById("messageBox");  //doesn't work

    document.getElementById("dark") 
        .addEventListener("click", function() {   //do we have to have this function here
        allThings.classList.toggle("darken");
        //messBoxBorder.classList.toggle("lightBorder");  //this part doesn't work
        });

    document.getElementById("bigText")
        .addEventListener("click", function() {
        allThings.classList.toggle("giant");
        });
	