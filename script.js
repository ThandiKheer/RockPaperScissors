function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)+1;
        if(num===1)
        return "rock";
    else if(num===2)
        return "paper";
    else
        return "scissors";

}
function getPlayerChoice(){
    let index=Math.floor(Math.random() *3 );
    const choices =[ 'rock', 'paper', 'scissors'];
    return choices[index];
}


function playRound(playerSelection, computerSelection){
    if(playerSelection==="rock"){
        if(computerSelection==="rock"){
            return "Tie";
        }
        else if(computerSelection==="paper"){
             return "Computer Wins";
        }
        else if(computerSelection==="scissors"){
             return "Player Wins";
        }
    }

    else if(playerSelection==="paper"){
        if(computerSelection==="rock"){
            return "Player Wins";
        }
        else if(computerSelection==="paper"){
             return "Tie";
        }
        else if(computerSelection==="scissors"){
             return "Computer Wins";
        }
    }

    else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            return "Computer Wins";
        }
        else if(computerSelection==="paper"){
             return "Player Wins";
        }
        else if(computerSelection==="scissors"){
             return "Tie";
        }
    }
}

let computerWins=0;
let playerWins=0;
for(let i=0;i<5;i++){
    let playerSelection= getPlayerChoice();
    let computerSelection=getComputerChoice();
    console.log(`player chose: ${playerSelection} || computer chose: ${computerSelection}`);
    console.log(playRound( playerSelection, computerSelection ));
    if(playRound(playerSelection, computerSelection)==="Player Wins"){
        playerWins++;
    }
    else if(playRound(playerSelection, computerSelection)==="Computer Wins"){
        computerWins++;
    }
    else if(playRound(playerSelection, computerSelection)==="Tie") {
        playerWins++;
        computerWins++;
    }
}
console.log(playerWins, computerWins);
playerWins>computerWins ? console.log("Player Wins the game"): console.log("Computer wins the game");


