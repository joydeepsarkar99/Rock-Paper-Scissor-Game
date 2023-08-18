let hands = document.getElementById('hands')
let result = document.getElementById('result')
let endGameButton = document.getElementById('endGameButton')


function getComputerChoice() {
    let rpsChoices = ['Rock', 'Paper', 'Scissors']
    return rpsChoices[Math.floor(Math.random() * 3)]
  }
  
  
  function getResult(playerChoice, computerChoice) {
    let score;  
    if (playerChoice == computerChoice) {
      score = 0  
    } else if ((playerChoice == 'Rock' && computerChoice == 'Scissors') || (playerChoice == "Paper" && computerChoice == "Rock") 
    || (playerChoice == "Scissors" && computerChoice == "Paper")) {
      score = 1   
    } else {
      score = -1
    }
    return score
  }
  

  function showResult(score, playerChoice, computerChoice) {
    if(score == 1){
      result.innerText = `You Win!`
    }
    else if(score == -1){
      result.innerText = `You Lose!`
    }
    else {
      result.innerText = `It's a Draw!`
    }

    hands.innerText = `👦 ${playerChoice} VS 🤖 ${computerChoice} `
  }
  

  function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
  }
  

  function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton)
    })

    endGameButton.onclick = () => endGame()
  }
  
 
  function endGame() {
    hands.innerText = ''
    result.innerText = ''
  }
  
  playGame()