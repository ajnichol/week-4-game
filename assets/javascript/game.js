$(document).ready(function() {
	//game object
	var game = {
		totalScore: 0,
		userTotal: 0,
		wins: 0,
		losses: 0,
		computersChoice: 0,
		darkBlueCrystal: 0,
		greenCrystal: 0,
		purpleCrystal: 0,
		yellowCrystal: 0,

		//At game start these are the random values the crystals will have and the random number the computer chooses
		initialize: function() {

			this.computersChoice = this.randomValue(19,120);
			this.darkBlueCrystal = this.randomValue(1,12);
			this.greenCrystal = this.randomValue(1,12);
			this.purpleCrystal = this.randomValue(1,12);
			this.yellowCrystal = this.randomValue(1,12);
			$("#wins").html(this.wins);
			$("#losses").html(this.losses);
			$("#random-number").html(this.computersChoice);

		},

		//create reset function so that when the user wins or losses everything resest
		resetGame: function() {

			this.initialize();
			this.totalScore = 0;
			$("#total-score").html(this.totalScore);
		},

		randomValue: function(min, max) {
			return Math.floor(Math.random() * (max-min) + min);

		},

		userWins: function() {
			this.wins++;
			$("#wins").text(this.wins);
			this.resetGame();
		},

		userLosses: function() {

			this.losses++;
			$("#losses").text(this.losses);
			this.resetGame();
		},

	};

	game.randomValue();

	game.initialize();
	

	$("#darkBlueCrystal").on("click", function() {

		game.totalScore += game.darkBlueCrystal;

		$("#total-score").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {

			game.userWins();
		}

		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}
	});

	$("#greenCrystal").on("click", function() {

		game.totalScore += game.greenCrystal;

		$("#total-score").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {

			game.userWins();
		}
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}
	});

	$("#purpleCrystal").on("click", function() {

		game.totalScore += game.purpleCrystal;

		$("#total-score").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {
			game.userWins();

		}
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}

	});

	$("#yellowCrystal").on("click", function() {

		game.totalScore += game.yellowCrystal;

		$("#total-score").text(game.totalScore);

		if(game.totalScore === game.computersChoice) {
			game.userWins();
		}
		else if(game.totalScore > game.computersChoice) {

			game.userLosses();
		}

	});


});

