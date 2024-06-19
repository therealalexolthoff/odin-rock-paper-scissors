// Setting up variables for later use
const gameSection = document.getElementById('gameUi')
const introSection = document.getElementById('introSection')
let holder


// Creates all required strings and conditions
function createConstants(playerName) {
    const CHOICES = ["Nil", "Rock", "Paper", "Scissors"]
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
function firstPlaythrough() {
   
    return createConstants(playerName)
}

document.getElementById('saveName').addEventListener('click', () => {
    gameSection.style.display = 'block'
    const playerName = document.getElementById("nameInput").value
    document.getElementById('playerScore').innerText = `${playerName} Score:`
    introSection.style.display = 'none'
    holder = createConstants(playerName)
})

function updateImages(image1,image2) {
    document.getElementById('playerImg').src = `./${image1}.jpg`
    document.getElementById('computerImg').src = `./${image2}.jpg`
}

function playGame() {
    const [CHOICES, STATES ,RESULTS] = holder
    const randNum =  Math.floor(Math.random() * 3) 
    const compChoice = CHOICES[randNum] 
    const result = RESULTS[compChoice][playerChoice]
    document.getElementById('resultText').innerText = result
    switch (result){
        case STATES[0]: {
           let currentScore = parseInt(document.getElementById('playerData').innerText)
           currentScore += 1
           currentScore
        }
    }
    
}
while (stillPlaying === true) {
    
    const randNum =  Math.floor(Math.random() * 3) 
    const compChoice = CHOICES[randNum] 
    const result = RESULTS[compChoice][playerChoice]
    alert(result)
    const playAgain = prompt("Want to play again?")
    stillPlaying = playAgain === "yes"
}  

