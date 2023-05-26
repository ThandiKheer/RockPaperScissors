function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)+1;
        if(num===1)
        return "rock";
    else if(num===2)
        return "paper";
    else
        return "scissors";
}

 function PlayRound(computerSelection, playerSelection){
     if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            return "Tie";
        }
        else if(computerSelection === "paper"){
             return "Computer Wins";
        }
        else if(computerSelection === "scissors"){
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
 
 let playerWins = 0;
 let computerWins = 0;
 
 // -------------RESULT-------------------
    function resultDisplay(result){
        const playerResult = document.querySelector('.playerResult');
        const computerResult = document.querySelector('.computerResult')
        playerResult.style.fontSize = "30px";
        computerResult.style.fontSize = "30px";
        
        if(result === "Player Wins") {
            playerWins++;
            playerResult.textContent = "PLAYER: " +playerWins;
            computerResult.textContent = "COMPUTER: "+computerWins;
        }
        else if(result === "Computer Wins") {
            computerWins++;   
            playerResult.textContent = "PLAYER: " +playerWins;
            computerResult.textContent = "COMPUTER: "+computerWins;
        }
        else if(result === "Tie") {
            playerWins++;
            computerWins++;
            playerResult.textContent = "PLAYER: " +playerWins;
            computerResult.textContent = "COMPUTER: "+computerWins;
        }
    
    
    if(computerWins === 5 || playerWins === 5){
        let winner;
        if(playerWins === 5){
            playerWins++;
            playerResult.textContent = "PLAYER: " +playerWins;
            computerResult.textContent = "COMPUTER: "+computerWins;
            winner = "PLAYER";
        }    
        else if(computerWins === 5){
            computerWins++;
            playerResult.textContent = "player: " +playerWins;
            computerResult.textContent = "computer: "+computerWins;
            winner = "COMPUTER";
        }
        alert(`Winner is ${winner}`);
        playerWins = 0;
        computerWins = 0;
        playerResult.textContent = "player: " + playerWins;
        computerResult.textContent = "computer: " + computerWins;
        targetDivPlayer.style.backgroundImage = "url('img/default.jpg.png')";
        targetDivComputer.textContent = "";
    }
}
    const targetDivComputer =  document.querySelector('.cpuSelection');
    

    function displaySelectedComp(computerSelection){
        const container = document.querySelector('.cpuSelection');
        container.style.fontSize = "100px";
        container.style.textAlign = "center";
        container.style.color = "azure";
        if(computerSelection === "rock"){
            container.textContent = " rock";
        }
        else if(computerSelection === "paper"){
            container.textContent = "paper";
        }
        else if(computerSelection === "scissors"){
            container.textContent = " scissors";
        }
    }
    
 //--------------------------------------------------------- 
 /* NOTE- make the background image the same size of the PlayerSelection div
             */
 const targetDivPlayer = document.querySelector('.PlayerSelection');
 
 function handlePressedButton(e){
    if( this.classList.value == 'RockBtnPlayer'){ 
        targetDivPlayer.style.backgroundImage = "url('img/playerRock.jpg')";
        buttonPressed =  'rock';  
     }
     else if( this.classList.value == 'PaperBtnPlayer' ){
        targetDivPlayer.style.backgroundImage = "url('img/paperPlayer.jpg')";
        buttonPressed = 'paper';
     }
     else if( this.classList.value == 'ScissorBtnPlayer' ){
        targetDivPlayer.style.backgroundImage = "url('img/playerScissorHand.jpg')";
        targetDivPlayer.style.backgroundSize = "contain";
        buttonPressed = 'scissors';
     }

      // COMPUTER SELECTION
    const computerSelection = getComputerChoice();

/*----------------PLAYROUND FUNCTION CALLED------------------------- - */
     let result = PlayRound(computerSelection, buttonPressed);

    
    
/*-------------FUNCTION TO  SET THE CHOICES OF PLAYER AND COMPUTER TO MAIN CONTAINER-------------------------------- */
   // displaySelected(buttonPressed);
    displaySelectedComp(computerSelection);


/*-------------------------RESULT DISPLAYED--------------------------------------------- */
    resultDisplay(result); 
 }

 
 
/*------------------------------PLAYER SELECTED BUTTON----------------------------------*/
 const playerChoiceRock = document.querySelector('.RockBtnPlayer');
 const playerChoicePaper = document.querySelector('.PaperBtnPlayer');
 const playerChoiceScissors = document.querySelector('.ScissorBtnPlayer');

 let buttonPressed = null;

 playerChoiceRock.addEventListener('click', handlePressedButton);
 playerChoicePaper.addEventListener('click', handlePressedButton);
 playerChoiceScissors.addEventListener('click', handlePressedButton);













