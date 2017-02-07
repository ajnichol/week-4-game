
$(document).ready(function() {

	var number = parseInt("");
	var totalScore = 0;
	var wins = 0;
	$("#wins").html(wins);
	var losses = 0;
	$("#losses").html(losses);
	var lockGame = false;
	var computersChoice = Math.floor(Math.random() * 120) + 19;

	function resetGame() {

		computersChoice = Math.floor(Math.random() * 120) + 19;
		number = computersChoice;
		totalScore = 0;
	}

	number = computersChoice;

	$("#random-number").append(number);

	$("button").on("click", function() {
		
		usersChoice = $(this).attr("value");

		usersChoice = parseInt(usersChoice);

		$("#total-score").html(totalScore += usersChoice);

		if(totalScore > computersChoice) {

			losses++;
			$("#losses").html(losses);

		}

		if(totalScore === computersChoice) {

			wins++;
			$("#wins").html(wins);

		}

	});

	
});
