// Setting up variables for later use
const gameSection = document.getElementById('gameUi')
const introSection = document.getElementById('introSection')
let holder
const scores = {
    playerScore : 0,
    computerScore: 0 
}

// Creates all required strings and conditions
function createConstants(playerName) {
    const CHOICES = ["Rock", "Paper", "Scissors"]
    const STATES = [`${playerName} wins!`, "It's a tie.", "Computer Wins!" ]
    const RESULTS = {"Rock": 
        {"Paper": 
            STATES[0], 
        "Rock": STATES[1],
        "Scissors": STATES[2]
        }, "Paper": 
        {"Paper": 
            STATES[1], 
        "Rock": STATES[2],
        "Scissors": STATES[0]
        },
        "Scissors": 
        {"Paper": 
            STATES[2], 
        "Rock": STATES[0],
        "Scissors": STATES[1]
        },
    }
    return [CHOICES,STATES,RESULTS]
}

// Event listeners to control the flow of the experience
document.getElementById('saveName').addEventListener('click', () => {
    gameSection.style.display = 'flex'
    const playerName = document.getElementById("nameInput").value
    const playerNameNode = document.createElement('span')
    playerNameNode.innerText = `${playerName} Score:`
    document.getElementById('playerScore').insertBefore(playerNameNode, document.getElementById('playerScoreData')) 
    introSection.style.display = 'none'
    holder = createConstants(playerName)
})

document.getElementById('rock').addEventListener('click', ()=> {
    playGame("Rock")
} )
document.getElementById('paper').addEventListener('click', ()=> {
    playGame("Paper")
} )
document.getElementById('scissors').addEventListener('click', ()=> {
    playGame("Scissors")
} )

function updateImages(image1,image2) {
    document.getElementById('playerImg').src = `./${image1}.png`
    document.getElementById('computerImg').src = `./${image2}.png`
}

function assignScore(data,states){
       if (data === states[0]) {
            let playerData = document.getElementById('playerScoreData').innerHTML
            if (playerData) {
               const newScore =  parseInt(playerData) + 1
               document.getElementById('playerScoreData').innerHTML = newScore
               scores.playerScore = newScore
            }
            else {
                document.getElementById('playerScoreData').innerHTML = 1
            }
        }
        else if (data === states[2]) {
            let computerData = document.getElementById('computerData').innerHTML
            if (computerData) {
               const newScore =  parseInt(computerData) + 1
               document.getElementById('computerData').innerHTML = newScore
               scores.computerScore = newScore
            }
            else {
                document.getElementById('computerData').innerHTML = 1
            }
         }
    }

function gameOver(){
    const playerWonStatus = scores.playerScore > 4 ? true : false
    const computerWonStatus = scores.computerScore > 4 ? true : false
    if (playerWonStatus || computerWonStatus) {
        document.querySelector('main').style.display = 'none'
        const gameOverMessage = document.createElement('h1')
        const message = playerWonStatus ? 'You won!' : 'The computer won!'
        gameOverMessage.innerHTML = message
        gameOverMessage.style.textAlign = 'center'
        document.querySelector('body').appendChild(gameOverMessage)
    }
}

function playGame(playerChoice) {
    const [CHOICES, STATES ,RESULTS] = holder
    const randNum =  Math.floor(Math.random() * 3) 
    const compChoice = CHOICES[randNum] 
    const result = RESULTS[compChoice][playerChoice]
    document.getElementById('resultText').innerText = result
    updateImages(playerChoice,compChoice)
    assignScore(result,STATES)
    gameOver()
}



