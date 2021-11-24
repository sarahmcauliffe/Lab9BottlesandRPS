//Bottles of Beer
function computeLyrics(){
    for(i=99;i>=0;i--){
        if(i>1){
            document.getElementById("main").innerHTML+="<br>"+i+" bottles of beer on the wall, "+i+" bottles of beer.<br>Take one down and pass it around, "+(i-1)+" bottles of beer on the wall.<br>";
        }
        else if(i==1){
            document.getElementById("main").innerHTML+="<br>"+i+" bottle of beer on the wall, "+i+" bottle of beer.<br>Take one down and pass it around, no more bottles of beer on the wall.<br>";
        }
        else{
            document.getElementById("main").innerHTML+="<br>No more bottles of beer on the wall, no more bottles of beer.<br>Go to the store and buy some more, 99 bottles of beer on the wall.<br>";
        }
    }
    hide();
}
	
	

//Rock Paper Scissors
function RPS(){
	var machine = "rock";
	var result = document.getElementById("result");
	var userPick = prompt("Please enter rock, paper or scissors: ");
	userPick = userPick.toLowerCase();
	
	if (userPick === machine){
		result.innerHTML = "Draw!";
		result.style.color = "#66ff99";
	}
	else if (userPick === "scissors"){
		result.innerHTML = "Loser!";
		result.style.color = "#e60000";
	} 
	else if (userPick === "paper"){
		result.innerHTML = "Winner";
		result.style.color = "#33cc33";
	}
	else {
		result.innerHTML = "Invalid input,  try again!";
		result.style.color = "#1aa3ff";
	}
}


function playAgain() {
	var machine = "rock";
	var result = document.getElementById("result");
	var userPick = prompt("Please enter rock, paper or scissors: ");
	userPick = userPick.toLowerCase();
	
	if (userPick === machine){
		result.innerHTML = "Draw!";
		result.style.color = "#66ff99";
	}
	else if (userPick === "scissors"){
		result.innerHTML = "Loser!";
		result.style.color = "#e60000";
	} 
	else if (userPick === "paper"){
		result.innerHTML = "Winner";
		result.style.color = "#33cc33";
	}
	else {
		result.innerHTML = "Invalid input,  try again!";
		result.style.color = "#1aa3ff";
	}
}
	