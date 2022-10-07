const computerChoice = document.getElementById("computer-choice")
const playerChoice = document.getElementById("player-choice")
const resultOutput = document.getElementById("result")

const possibleChoices = document.querySelectorAll('button')

let computer
let player
let result


possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    
    generateComputerChoice();
}))

const generateComputerChoice = function() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber = 1) {
        computer = "rock";
    } else if (randomNumber = 2) {
        computer = "paper";
    } else if (randomNumber = 3) {
        computer = "scissors";
    } 
    computerChoice.innerHTML = computer;
    console.log(randomNumber)
}

const getResult = function() {
    if (computerChoice = playerChoice){
        result = "gelijkspel"
    } else if (computer = rock)
    


    if(player === computer){
        result.textContent = 'gelijkspel'
    }
    else if(computer == 'rock'){
        if(player == 'paper'){
            result.textContent = 'Je hebt gewonnen';
        }
    }
    else if(computer == 'rock'){
        if(player == 'scissors'){
            result.textContent = 'je hebt verloren!';
        }
    }
    else if(computer == 'paper'){
        if(player == 'scissors'){
            result.textContent = 'je hebt gewonnen!';
        }
    }
    else if(computer == 'paper'){
        if(player == 'rock'){
            result.textContent = 'je hebt verloren!';
        }
    }
    else if(computer == 'scissorts'){
        if(player == 'rock'){
            result.textContent = 'je hebt gewonnen!';
        }
    }
    else if(computer == 'scissor'){
        if(player == 'paper'){
            result.textContent = 'je hebt verloren!';
        }
    }
    resultOutput.innerHTML = getResult()
} 