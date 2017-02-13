(function(){

	"use strict";

	$(function(){
		
		$('#imgRock').on("click",function(){
		    var rock = "rock";
		    computerChoice(rock);
		});

		$('#imgPaper').on("click",function(){
			var paper = "paper";
			computerChoice(paper);
		});

		$('#imgScissors').on("click",function(){
			var scissors = "scissors";
			computerChoice(scissors);
		});

	});

	function computerChoice(userChoice){
		var spanComputerOutcome = document.getElementById('spanComputerOutcome');
		var computerChoice = "";
		var userChoice = userChoice;
		
		var x = Math.random();
		if(x < 0.33){
			computerChoice = "rock";
			spanComputerOutcome.innerHTML = "rock";
		}
		else if (x > 0.33 && x < 0.66){
			computerChoice = "paper";
			spanComputerOutcome.innerHTML = "paper";
		}
		else if (x > 0.66){
			computerChoice = "scissors";
			spanComputerOutcome.innerHTML = "scissors";
		}

		calculateWinner(computerChoice,userChoice);
	}

	function calculateWinner(computerChoice,userChoice){
		
		var spanMatchOutcome = document.getElementById('spanMatchOutcome')
		var computerChoice = computerChoice;
		var userChoice = userChoice;

		if (computerChoice === userChoice){
			spanMatchOutcome.innerHTML = "The result is a tie!";
		}
		else if (computerChoice === "rock"){
			if(userChoice === "scissors"){
				spanMatchOutcome.innerHTML = "The computer wins with rock";
			}
			else{
				spanMatchOutcome.innerHTML = "You won with paper!";
			}
		}
		else if (computerChoice === "paper") {
        	if (userChoice === "rock") {
        		spanMatchOutcome.innerHTML = "The computer wins with paper";
        	}
        	else {
            	spanMatchOutcome.innerHTML = "You won with scissors!";
        	}
	    }
	    else if (computerChoice === "scissors") {
	    	if (userChoice === "paper") {
	            spanMatchOutcome.innerHTML = "The computer wins with scissors";
	        }
	        else {
	            spanMatchOutcome.innerHTML = "You won with rock!";
	        }
	    }
	}

})(); // End of Javascript