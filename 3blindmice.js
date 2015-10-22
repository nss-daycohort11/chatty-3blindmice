$(document).ready(function() {
  // All the JavaScript that depends on jQuery will be written here


	var userMsg = $("#userMessage");
console.log("userMsg.value", userMsg.value);
	var msgBox = $("#messageBox");

	var clearAll = $("#clear");

	var msgString = "";

console.log("clearAll", clearAll);
	//checking for the enter in user message, if entered put value in variable and call function

	userMsg.keydown(function(keypress) {

		if (keypress.keyCode === 13) {
			clearAll.removeAttr("disabled");
			var message = userMsg.val();
			stringMessage(message);
console.log("message", message);


	//call function to create data string and button for the messages box

			function stringMessage (message) {
	//			msgString += "<div id='entry'>" + message + "<button class='delete'>Delete</button></div>";
	//			msgBox.innerHTML = msgString;
				var newElem = $("<div></div>");  //creates new div node
	            newElem.html(message + "<button class='delete'>Delete</button>");
	            newElem.attr("id", "entry");
	            msgBox.append(newElem);
			}

	//call this function to clear the input in the enter message box

			

				
				userMsg.val("");
			
		}
	});

	//check to see if the delete button in the messages box has been clicked.  if true, delete the string from the msgBox.innerHTML

	$("body").on("click",(".delete", function(event) {
		if (event.target.className === "delete") {
			console.log("you clicked on a delete button");
		  // Delete div element including message and button
		  console.log("parentNode ", event.target.parentNode)
		   event.target.parentNode.remove();
		}
	}));

	// Clear all messages on the board

	clearAll.click (function() {
		console.log("clearing input");
		msgBox.html("");
		clearAll.attr("checked");
		clearAll.attr("disabled");
	});

	var allThings = $("#container");

	// var messBoxBorder = document.getElementById("messageBox");  //doesn't work

	    $("#dark").click (function() {   //do we have to have this function here
	        allThings.classList.toggle("darken");
	        //messBoxBorder.classList.toggle("lightBorder");  //this part doesn't work
	        });

	    $("#bigText").click (function() {
	        allThings.toggleClass("giant");
	        });
		
});