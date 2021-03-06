let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
const btnStartGameEl = document.querySelector('#start-game-el')
const btnNewCardEl = document.querySelector('#new-card-el')
const messageEl = document.querySelector('#message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')
const playerEl = document.querySelector('#player-el')
let player = {
    name: 'Per',
    chips: 0
}

playerEl.innerText = `${player.name}: $${player.chips}`

function startGame() {
    playerEl.innerText = `${player.name}: $${player.chips}`
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.innerText = `Cards: ${cards.join(' ')}`
    sumEl.innerText = `Sum: ${cards.reduce((acc, counter) => acc + counter, 0)}`

    if (sum < 21) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'You have got a Blackjack!'
        player.chips += 50
        hasBlackJack = true
    } else {
        message = 'You are out of the game!'
        isAlive = false
    }
    messageEl.innerText = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

btnStartGameEl.addEventListener('click', startGame)
btnNewCardEl.addEventListener('click', newCard)