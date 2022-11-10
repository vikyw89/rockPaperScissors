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
            return 'Computer uses Rock, Draw!'
        } else if (p2 === 'paper') {
            return 'Computer uses Paper, you Lose!'
        } else {
            return 'Computer uses Scissors, you Win!'
        }
    } else if (p1 === 'paper') {
        if (p2 === 'rock') {
            return 'Computer uses Rock, you Win!'
        } else if (p2 === 'paper') {
            return 'Computer uses Paper, Draw!'
        } else {
            return 'Computer uses Scissors, you Lose!'
        }
    } else if (p1 === 'scissors') {
        if (p2 === 'rock') {
            return 'Computer uses Rock, you Lose!'
        } else if (p2 === 'paper') {
            return 'Computer uses Paper, you Win!'
        } else {
            return 'Computer uses Scissors, Draw!'
        }
    } else {
        return `You Lose! Computer's ${computerSelection} beats through your ${playerSelection}`
    }
}


const clickHandler = (e) => {
    const playerSelection = e.target.value
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)

    const announcer = document.querySelector('.announcement')
    const announcer2 = document.querySelector('.announcement2')
    announcer.textContent = result
    const computerHPBar = document.querySelector('#computerHP')
    const playerHPBar = document.querySelector('#playerHP')

    const lose = document.createElement('img')
    lose.setAttribute('src','./images/lose.gif')
    lose.setAttribute('width','50%')
    lose.setAttribute('text-align', 'center')
    lose.setAttribute('transition-duration', '3s')

    const win = document.createElement('img')
    win.setAttribute('src','./images/win.gif')
    win.setAttribute('width', '25%')
    win.setAttribute('text-align', 'center')
    win.setAttribute('transition-duration', '3s')

    const draw = document.createElement('img')
    draw.setAttribute('src', './images/draw.gif')
    draw.setAttribute('width', '50%')
    draw.setAttribute('text-align', 'center')
    draw.setAttribute('transition-duration', '3s')

    const gameOver = document.createElement('img')
    draw.setAttribute('src', './images/gameOver.gif')
    draw.setAttribute('width', '50%')
    draw.setAttribute('text-align', 'center')
    gameOver.setAttribute('transition-duration', '3s')

    if (result.includes('Win')) {
        computerHPBar.value -= 1
        announcer.classList.add('playingGreen')
        announcer2.appendChild(win)
        setTimeout(()=> {
            announcer2.removeChild(win)
        },4000)
    } else if (result.includes('Lose')) {
        playerHPBar.value -= 1
        announcer.classList.add('playingRed')
        announcer2.appendChild(lose)
        setTimeout(()=> {
            announcer2.removeChild(lose)
        },4000)
    } else {
        announcer.classList.add('playingNeutral')
        announcer2.appendChild(draw)
        setTimeout(()=> {
            announcer2.removeChild(draw)
        },4000)
    }
    if (playerHPBar.value === 0) {
        announcer.textContent = 'GAME OVER'
        announcer.classList.add('playingRed')
        announcer2.appendChild(gameOver)
        setTimeout(()=> {
            announcer2.removeChild(gameOver)
        },10000)
        computerHPBar.value = 5
        playerHPBar.value = 5
    } else if (computerHPBar.value === 0) {
        announcer.textContent = 'YOU WON THE GAME!'
        announcer.classList.add('playingGreen')
        announcer2.appendChild(win)
        setTimeout(()=> {
            announcer2.removeChild(win)
        },10000)
        computerHPBar.value = 5
        playerHPBar.value = 5
    }
}

const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    console.log(e.target.classList)
    e.target.classList.remove('playingRed')
    e.target.classList.remove('playingGreen')
    e.target.classList.remove('playingNeutral')
}

const buttons = document.querySelectorAll('button')

const announcer = document.querySelector('.announcement')

buttons.forEach(button => {
    button.addEventListener('click', clickHandler)
})

announcer.addEventListener('transitionend', removeTransition)

