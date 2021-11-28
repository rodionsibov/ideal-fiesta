let count = 0
const countEl = document.querySelector('#count-el')
const btnIncrement = document.querySelector('#increment-btn')
const btnSave = document.querySelector('#save-btn')

btnIncrement.addEventListener('click', increment)
btnSave.addEventListener('click', save)

function increment() {
    count++
    countEl.innerHTML = count
}

function save() {
    console.log(count);
}