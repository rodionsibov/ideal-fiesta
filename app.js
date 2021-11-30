let count = 0
const entries = []
const countEl = document.querySelector('#count-el')
const saveEl = document.querySelector('#save-el')
const btnIncrement = document.querySelector('#increment-btn')
const btnSave = document.querySelector('#save-btn')

btnIncrement.addEventListener('click', increment)
btnSave.addEventListener('click', save)

function increment() {
    count++
    countEl.innerText = count
}

function save() {
    if (count !== 0) entries.push(count)
    saveEl.innerText = `Previous entries: ${entries.join(' - ')}`
    count = 0
    countEl.innerText = 0
}