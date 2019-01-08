var paper = document.getElementById("paper");
var rock = document.getElementById("rock");
var scissors = document.getElementById("scissors");
var result = document.querySelector(".result");
var final = document.querySelector(".final");
var reset = document.querySelector("#reset");
var prs = ["paper","rock","scissors"];
var cnt=0;
reset.addEventListener("click",function(){
	paper.classList.remove("user");
    paper.classList.remove("tie");
	paper.classList.remove("computer");
	rock.classList.remove("user");
	rock.classList.remove("tie");
	rock.classList.remove("computer");
	scissors.classList.remove("user");
	scissors.classList.remove("tie");
	scissors.classList.remove("computer");
	result.innerHTML = "<h2 >The computer picks ...</h2>";
    final.innerHTML = "<h2></h2>";
    cnt=0;	
})
paper.addEventListener("click",function(){
	if(cnt==0){
	paper.classList.add("user");
	cnt=1;
	var computerChoice = generateRandomChoice();
	var choice = prs[computerChoice];
	if(choice=="paper")
	paper.classList.add("tie");
    else
    	if(choice=="rock")
    		rock.classList.add("computer");
    	else
    		scissors.classList.add("computer");
	if(computerChoice === 0){
     result.innerHTML = "<h2>The computer picks ... paper</h2>";
     final.innerHTML = "<h2>The result is a tie</h2>"
    	}
	else
    if(computerChoice === 1)
    {
        result.innerHTML = "<h2>The computer picks ... rock</h2>";
        final.innerHTML = "<h2>You won with paper!</h2>"
    }
    else
    if(computerChoice === 2)
    {
    	result.innerHTML = "<h2>The computer picks ... scissors</h2>";
        final.innerHTML = "<h2>The computer wins with scissors</h2>"      
    }
}
})
rock.addEventListener("click",function(){
	if(cnt==0){
	rock.classList.add("user");
	cnt=1;
	var computerChoice = generateRandomChoice();
	var choice = prs[computerChoice];
	if(choice=="paper")
	paper.classList.add("computer");
    else
    	if(choice=="rock")
    		rock.classList.add("tie");
    	else
    		scissors.classList.add("computer");
	if(computerChoice === 0){
     result.innerHTML = "<h2>The computer picks ... paper</h2>";
     final.innerHTML = "<h2>The computer wins with the paper</h2>"
    	}
	else
    if(computerChoice === 1)
    {
        result.innerHTML = "<h2>The computer picks ... rock</h2>";
        final.innerHTML = "<h2>The result is a tie!</h2>"
    }
    else
    if(computerChoice === 2)
    {
    	result.innerHTML = "<h2>The computer picks ... scissors</h2>";
        final.innerHTML = "<h2>You won with rock!</h2>"      
    }
}
})
scissors.addEventListener("click",function(){
	if(cnt==0){
	scissors.classList.add("user");
	cnt=1;
	var computerChoice = generateRandomChoice();
	var choice = prs[computerChoice];
	if(choice=="paper")
	paper.classList.add("computer");
    else
    	if(choice=="rock")
    		rock.classList.add("computer");
    	else
    		scissors.classList.add("tie");
	if(computerChoice === 0){
     result.innerHTML = "<h2>The computer picks ... paper</h2>";
     final.innerHTML = "<h2>You won with scissors!</h2>"
    	}
	else
    if(computerChoice === 1)
    {
        result.innerHTML = "<h2>The computer picks ... rock</h2>";
        final.innerHTML = "<h2>The computer wins with rock</h2>"
    }
    else
    if(computerChoice === 2)
    {
    	result.innerHTML = "<h2>The computer picks ... scissors</h2>";
        final.innerHTML = "<h2>The result is a tie</h2>"      
    }
}
})

//var userChoice = generateRandomChoice();
function generateRandomChoice(){
          var computerChoice = Math.floor(Math.random() * 3);
          return computerChoice;
}