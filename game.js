// Setting up variables for later use
const gameSection = document.getElementById('gameUi')
const introSection = document.getElementById('introSection')
let holder


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
    gameSection.style.display = 'block'
    const playerName = document.getElementById("nameInput").value
    document.getElementById('playerScore').innerText = `${playerName} Score:`
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
    document.getElementById('playerImg').src = `./${image1}.jpg`
    document.getElementById('computerImg').src = `./${image2}.jpg`
}

function assignScore(data,states){
    switch (data){
        case states[0]: {
            let playerData = document.getElementById('playerData')
            console.log(playerData)
            if (playerData) {
               const newScore =  parseInt(playerData) + 1
               playerData.innerHTML = newScore
            }
            else {
                document.getElementById('playerData').innerHTML = 1
            }
            console.log('running')
           let currentScore = parseInt(document.getElementById('playerData').innerHTML)
           currentScore += 1
           document.getElementById('playerData').innerHTML = currentScore
        }
        case states[2]: {
            let computerData = document.getElementById('computerData').innerHTML
            if (computerData) {
               const newScore =  parseInt(computerData) + 1
               computerData.innerHTML = newScore
            }
            else {
                document.getElementById('computerData').innerHTML = 1
            }
            // computerScore += 1
            
            // document.getElementById('computerData').innerHTML = computerScore
         }
         default: {
            console.log(
                'tie'
            )
         }
    }
}

function playGame(playerChoice) {
    const [CHOICES, STATES ,RESULTS] = holder
    const randNum =  Math.floor(Math.random() * 4) 
    const compChoice = CHOICES[randNum] 
    console.log(compChoice)
    console.log(RESULTS[compChoice])
    const result = RESULTS[compChoice][playerChoice]
    document.getElementById('resultText').innerText = result
    assignScore(result,STATES)
}
// while (stillPlaying === true) {
    
//     const randNum =  Math.floor(Math.random() * 3) 
//     const compChoice = CHOICES[randNum] 
//     const result = RESULTS[compChoice][playerChoice]
//     alert(result)
//     const playAgain = prompt("Want to play again?")
//     stillPlaying = playAgain === "yes"
// }  

