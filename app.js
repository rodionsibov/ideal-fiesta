let firstCard =getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ''
const btnStartGameEl = document.querySelector('#start-game-el')
const btnNewCardEl = document.querySelector('#new-card-el')
const messageEl = document.querySelector('#message-el')
const sumEl = document.querySelector('#sum-el')
const cardsEl = document.querySelector('#cards-el')

function startGame() {
    renderGame()
}

function renderGame() {
    for (let i = 0; i < cards.length; i++) {
        cardsEl.innerText += ` ${cards[i]}`
        sumEl.innerText = `Sum: ${cards.reduce((acc, counter) => acc + counter, 0)}`
    }

    if (sum < 21) {
        message = 'Do you want to draw a new card?'
    } else if (sum === 21) {
        message = 'You have got a Blackjack!'
        hasBlackJack = true
    } else {
        message = 'You are out of the game!'
        isAlive = false
    }
    messageEl.innerText = message
}

function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1
}

btnStartGameEl.addEventListener('click', startGame)
btnNewCardEl.addEventListener('click', newCard)