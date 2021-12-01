const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const myLeads = []

function saveLead() {
    if (inputEl.value) myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLeads()
}

function renderLeads() {
    ulEl.innerHTML = myLeads.map(item => {
        return `
    <li><a href="https://${item}.com" target="blank">${item}</a></li>
    `
    }).join('')
}

inputBtn.addEventListener('click', saveLead)