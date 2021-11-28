let count = 0
const countEl =  document.querySelector('#count-el')
const btnEl = document.querySelector('#increment-btn')

btnEl.addEventListener('click', increment)

function increment() {
    count++
   countEl.innerHTML = count
}