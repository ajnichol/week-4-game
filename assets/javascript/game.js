$(document).ready(function() {
	//game object
	var game = {
		totalScore: 0,
		userTotal: 0,
		wins: 0,
		losses: 0,
		computersChoice: 0,
		blueCrystal: 0,
		greenCrystal: 0,
		purpleCrystal: 0,
		yellowCrystal: 0,

		//At game start these are the random values the crystals will have and the random number the computer chooses
		initialize: function() {

			this.computersChoice = this.randomValue(19,120);
			this.blueCrystal = this.randomValue(1,12);
			this.greenCrystal = this.randomValue(1,12);
			this.purpleCrystal = this.randomValue(1,12);
			this.yellowCrystal = this.randomValue(1,12);
			$("#wins").html(this.wins);
			$("#losses").html(this.losses);
			$("#random-number").html(this.computersChoice);
			$("#totalScore").html(this.totalScore);

		},

		//create reset function so that when the user wins or losses everything resest
		resetGame: function() {

			this.initialize();
			this.totalScore = 0;
			$("#totalScore").html(this.totalScore);
		},

		//fucntion that chooses a random value for each crystal and computer
		randomValue: function(min, max) {

			return Math.floor(Math.random() * (max-min) + min);
		},

		//function that increases the users score if they win
		userWins: function() {

			this.wins++;
			$("#wins").text(this.wins);
			this.resetGame();
		},

		//function that decreases the users score if they lose
		userLosses: function() {

			this.losses++;
			$("#losses").text(this.losses);
			this.resetGame();
		},

	};

	//calling upon my randomValue function to intialize the game
	game.randomValue();

	//once I call my randomValue function my intialize game function is utilized
	game.initialize();
	
	//on click of crystal we increase the random value and add it to totalscore 
	$("#blueCrystal").on("click", function() {

		game.totalScore += game.blueCrystal;

		$("#totalScore").text(game.totalScore);

		//if user adds the crystal's value to equal the computer's number we call our user wins function to increase their wins
		if(game.totalScore === game.computersChoice) {

			game.userWins();
		}

		//if user adds the crystal's value and it is greater than the computer's number we increase their losses
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}
	});

	$("#greenCrystal").on("click", function() {

		game.totalScore += game.greenCrystal;

		$("#totalScore").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {

			game.userWins();
		}
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}
	});

	$("#purpleCrystal").on("click", function() {

		game.totalScore += game.purpleCrystal;

		$("#totalScore").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {

			game.userWins();
		}
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}

	});

	$("#yellowCrystal").on("click", function() {

		game.totalScore += game.yellowCrystal;

		$("#totalScore").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {

			game.userWins();
		}
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}

	});


});

