const gameSection = document.getElementById('gameUi')
let playerName
document.getElementById('saveName').addEventListener('click', () => {
    gameSection.style.display = 'block'
    playerName = document.getElementById("nameInput").value
    introSection.style.display = 'none'
})