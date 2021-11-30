let firstCard = 10
let secondCard = 11
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
    cardsEl.innerText = `Cards: ${firstCard} ${secondCard}`
    sumEl.innerText = `Sum: ${sum}`
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
    
}

btnStartGameEl.addEventListener('click', startGame)
btnNewCardEl.addEventListener('click', newCard)