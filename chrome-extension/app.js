const inputBtn = document.querySelector('#input-btn')
const deleteBtn = document.querySelector('#delete-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
let myLeads = []

if (localStorage.getItem('myLeads')) {
    myLeads = JSON.parse(localStorage.getItem('myLeads'))
    renderLeads()
}

function saveLead() {
    if (inputEl.value) myLeads.push(inputEl.value)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    inputEl.value = ''
    renderLeads()
}

function renderLeads() {
    ulEl.innerHTML = myLeads.map(item => {
        return `
    <li><a href="${item}" target="_blank">${item}</a></li>
    `
    }).join('')
}

function deleteLeads() {
    if (confirm('Are you sure? Do you want to delete all leads?')) {
        localStorage.clear()
        myLeads = []
        renderLeads()
    }
}

inputBtn.addEventListener('click', saveLead)
deleteBtn.addEventListener('click', deleteLeads)