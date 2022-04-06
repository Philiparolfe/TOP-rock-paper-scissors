// simple RPC game for the Odin Project with Tailwindcss
const playerSelections = document.querySelectorAll('button')
const playerSelectionDisplay = document.getElementById('player-pick')
const computerSelectionDisplay = document.getElementById('computer-pick')
const lose = document.getElementById('lose')
const score = document.getElementById('score')

let options = ['👊', '👋', '✌️']
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
    if ((playerSelection == '👊' && computerSelection == '✌️') ||
        (playerSelection == '✌️' && computerSelection == '👋') ||
        (playerSelection == '👋' && computerSelection == '👊')) {
        console.log('🟩')
        score.innerHTML = '🟩'
        userWins++
        document.getElementById('userWins').innerHTML = userWins
    }
    else if ((computerSelection == '👊' && playerSelection == '✌️') ||
        (computerSelection == '✌️' && playerSelection == '👋') ||
        (computerSelection == '👋' && playerSelection == '👊')) {
        console.log('🅾️')
        score.innerHTML = '🅾️'
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

    if (computerSelection === '👊') {
        computerSelectionDisplay.innerHTML = '👊'
    } else if (computerSelection === '👋') {
        computerSelectionDisplay.innerHTML = '👋'
    } else if (computerSelection === '✌️') {
        computerSelectionDisplay.innerHTML = '✌️'
    }
    else {
        computerSelectionDisplay.innerHTML = '🅰️'
    }

}





