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
    const playerName = prompt("Welcome to the Rock Paper Scissors game! Please input your name.")
    alert(`Let's get started ${playerName}!`)
    return createConstants(playerName)
}

const [CHOICES, STATES, RESULTS] = firstPlaythrough()
let stillPlaying = true

while (stillPlaying === true) {
    const playerChoice = prompt("What do you want? Rock, Paper, or Scissors?")
    const randNum =  Math.floor(Math.random() * 3) 
    const compChoice = CHOICES[randNum] 
    const result = RESULTS[compChoice][playerChoice]
    alert(result)
    const playAgain = prompt("Want to play again?")
    stillPlaying = playAgain === "yes"
}  

