
$(document).ready(function() {

	var number = parseInt("");
	var totalScore = "";
	var lockGame = false;
	var computersChoice = Math.floor(Math.random() * 120) + 19;

	number = computersChoice;

	$("#random-number").append(number);

	$("button").on("click", function() {
		
		usersChoice = $(this).attr("value");

		usersChoice = parseInt(usersChoice);

		$("#total-score").html(usersChoice);

		

		
	});

	
});
