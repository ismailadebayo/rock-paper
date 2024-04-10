const computerChoiceDisplay = document.getElementById('computer')
const userChoiceDisplay = document.getElementById('user')
const resultDisplay = document.getElementById('result')
const buttonChoices = document.querySelectorAll('button')
 let userChoice
 let computerChoice
 

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    getComputerChoice()
    getResult()
}))


function getComputerChoice(){

    const randomNumber = Math.floor(Math.random() * 3 + 1)
    if(randomNumber===1){
        computerChoice = 'rock'
        computerChoiceDisplay.innerText = computerChoice
    }
    if(randomNumber===2){
        computerChoice = 'paper'
        computerChoiceDisplay.innerText = computerChoice
    }
    if(randomNumber===3){
        computerChoice = 'scissors'
        computerChoiceDisplay.innerText = computerChoice
    }

}

function getResult(){
    if(userChoice==computerChoice){
        resultDisplay.innerText = 'It is a draw'
    }
    if(userChoice== 'rock' && computerChoice=='paper'){
        resultDisplay.innerText = 'You won'
    }
    if(userChoice== 'rock' && computerChoice=='scissors'){
        resultDisplay.innerText = 'You won'
    }
    if(userChoice== 'paper' && computerChoice=='scissors'){
        resultDisplay.innerText = 'You lost'
    }
    if(userChoice== 'paper' && computerChoice=='rock'){
        resultDisplay.innerText = 'You lost'
    }
    if(userChoice== 'scissors' && computerChoice=='rock'){
        resultDisplay.innerText = 'You lost'
    }
    if(userChoice== 'scissors' && computerChoice=='paper'){
        resultDisplay.innerText = 'You won'
    }
}