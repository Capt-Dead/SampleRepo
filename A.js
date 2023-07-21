var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");
const scoreboard = document.querySelector(".score_board");
const result = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const Comprock = document.getElementById("compR");
const Comppaper = document.getElementById("compP");
const Compscissor = document.getElementById("compS");

function compChoice(){
	const choices = [ 'r' , 'p', 's'];
	const compResult =Math.floor(Math.random() * 3);	
	console.log(compResult);
	return choices[compResult];


}

function convert(letter){
	if(letter === "r"){
		return "Rock";
	}
	else if(letter === "p"){
		return "Paper";
	}
	else if(letter === "s"){
		return "Scissor";
	}
}

//console.log(compChoice());
function won(userA, userB){
	userScore++;
	//console.log("USER WIN!! \m/ " + userScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	//console.log(userA);
	//console.log(userB);
	result.innerHTML= convert(userA) + " beats " + convert(userB) + ". You Win!!  ";
}

function lose(userB, userA){
	computerScore++;
	//console.log("USER LOSES. -_- " + computerScore);
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result.innerHTML= convert(userB) + " beats " + convert(userA) + ". You Lose. -_- ";
}

function draw(userA, userB){
	//console.log("It's a DRAW O.O");
	result.innerHTML= convert(userB) + " and " + convert(userA) + ". DRAW O.O!!!";

}

function game(userChoice){
	const compMove = compChoice();
	//console.log("User Choice: " + userChoice );
	//console.log("Computer Choice: " + compMove );
	const move = userChoice + compMove;
	if(move === "sp" || move === "pr" || move === "rs"){
		won(userChoice, compMove);
		
	}
	else if(move === "rp" || move === "ps" || move === "sr"){
		lose(compMove, userChoice);
		computerMoves()
	}
	else if(move === "rr" || move === "pp" || move === "ss"){
		draw(userChoice, compMove);
	}

}

function computerMoves(){
	const move = compChoice();
	if(move == 0){
		Comprock.innerHTML = sty
	}

function Series(){
	if(userScore == ){
		result.innerHTML= convert(userA) + " beats " + convert(userB) + ". You Win!!  ";
		
	}
	else if(computerScore == 7){
		result.innerHTML= convert(userB) + " beats " + convert(userA) + ". You Lose. -_- ";
	}
	
}
}


function main(){
rock.addEventListener('click', function(){
	game("r");

})

paper.addEventListener('click', function(){
	game("p");
	

})

scissor.addEventListener('click', function(){
	game("s");
	
})

}

main();
