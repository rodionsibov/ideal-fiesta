const inputBtn = document.querySelector('#input-btn')
const deleteBtn = document.querySelector('#delete-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
let myLeads = []
let oldLeads = []

inputBtn.disabled = true
inputEl.addEventListener('keyup', (e) => {
    e.target.value.trim()
        ? inputBtn.disabled = false
        : inputBtn.disabled = true

    if (e.code === 'Enter') {
        saveLead()
        inputBtn.disabled = true
    }
})

window.addEventListener('keyup', (e) => {
    if (e.shiftKey && e.key === 'D') {
        deleteLeads()
    }
})

if (localStorage.getItem('myLeads')) {
    myLeads = JSON.parse(localStorage.getItem('myLeads'))
    renderLeads(myLeads)
}

function saveLead() {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        localStorage.setItem('myLeads', JSON.stringify(myLeads))
        inputEl.value = ''
        renderLeads(myLeads)
    }
}

function renderLeads(leads) {
    ulEl.innerHTML = leads.map(item => {
        return `
    <li><a href="${item}" target="_blank">${item}</a></li>
    `
    }).join('')
}

function deleteLeads() {
    if (confirm('Are you sure? Do you want to delete all leads?')) {
        localStorage.clear()
        myLeads = []
        renderLeads(myLeads)
    }
}

inputBtn.addEventListener('click', saveLead)
deleteBtn.addEventListener('click', deleteLeads)