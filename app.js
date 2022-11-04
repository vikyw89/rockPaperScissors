const getComputerChoice = () => {
    const choices = {
        0: 'Rock',
        1: 'Paper',
        2: 'Scissors'
    }
    return choices[Math.floor(Math.random()*3)]
}

const playRound = (playerSelection, computerSelection) => {
    let p1 = playerSelection.toLowerCase();
    let p2 = computerSelection.toLowerCase();
    if (p1 === 'rock') {
        if (p2 === 'rock') {
            return 'Draw'
        } else if (p2 === 'paper') {
            return 'You Lose! Paper beats Rock'
        } else {
            return 'You Win! Rock beats Scissors'
        }
    } else if (p1 === 'paper') {
        if (p2 === 'rock') {
            return 'You Win! Paper beats Rock'
        } else if (p2 === 'paper') {
            return 'Draw'
        } else {
            return 'You Lose! Scissors beat Paper'
        }
    } else if (p1 === 'scissors') {
        if (p2 === 'rock') {
            return 'You Lose! Rock beats Scissors'
        } else if (p2 === 'paper') {
            return 'You Win! Scissors beat Rock'
        } else {
            return 'Draw'
        }
    } else {
        return `You Lose! Computer's ${computerSelection} beats through your ${playerSelection}`
    }
}

let playerSelection = "rock"

const game = () => {
    let result = []
    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}!`)
        let playerSelection = prompt('Rock, Paper, or Scissors')
        let computerSelection = getComputerChoice()
        console.log(`Player uses ${playerSelection}, and computer uses ${computerSelection}`)
        let announcement = playRound(playerSelection, computerSelection)
        console.log(announcement)
        result.push(announcement.includes("Win"))
    }
    let totalWin = result.join('').split('true').length-1
    console.log(`Player won ${totalWin} times, and loss ${5-totalWin} times`)
    console.log(`The winner is ${totalWin > 2 ? 'player !' : 'computer'}`)
}

game();