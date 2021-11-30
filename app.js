let firstCard = 10
let secondCard = 1
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
    console.log('Drawing a new card from the deck!');
    let card = 7
    sum += card
    cards.push(card)
    renderGame()
}

btnStartGameEl.addEventListener('click', startGame)
btnNewCardEl.addEventListener('click', newCard)