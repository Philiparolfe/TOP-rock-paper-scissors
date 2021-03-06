// simple RPC game for the Odin Project with Tailwindcss
const playerSelections = document.querySelectorAll('button')
const playerSelectionDisplay = document.getElementById('player-pick')
const computerSelectionDisplay = document.getElementById('computer-pick')
const score = document.getElementById('score')

let options = ['π', 'π', 'βοΈ']
let computerSelection
let userWins = 0;
let computerscore = 0;
let playerSelection


playerSelections.forEach(playerSelection => playerSelection.addEventListener('click', (e) => {
    playerSelection = e.target.id
    playerSelectionDisplay.innerHTML = playerSelection
    console.log(playerSelection)
    computerRandom()
    console.log(computerSelection)
    if ((playerSelection == 'π' && computerSelection == 'βοΈ') ||
        (playerSelection == 'βοΈ' && computerSelection == 'π') ||
        (playerSelection == 'π' && computerSelection == 'π')) {
        console.log('π©')
        score.innerHTML = 'π©'
        userWins++
        document.getElementById('userWins').innerHTML = userWins
    }
    else if ((computerSelection == 'π' && playerSelection == 'βοΈ') ||
        (computerSelection == 'βοΈ' && playerSelection == 'π') ||
        (computerSelection == 'π' && playerSelection == 'π')) {
        console.log('πΎοΈ')
        score.innerHTML = 'πΎοΈ'
        computerscore++
        document.getElementById('computerscore').innerHTML = computerscore
    }
    else {
        console.log('TIE')
        score.innerHTML = 'TIE'
    }

}))




function computerRandom() {

    computerSelection = (options[Math.floor(Math.random() * options.length)])

    if (computerSelection === 'π') {
        computerSelectionDisplay.innerHTML = 'π'
    } else if (computerSelection === 'π') {
        computerSelectionDisplay.innerHTML = 'π'
    } else if (computerSelection === 'βοΈ') {
        computerSelectionDisplay.innerHTML = 'βοΈ'
    }
    else {
        computerSelectionDisplay.innerHTML = 'π°οΈ'
    }

}





