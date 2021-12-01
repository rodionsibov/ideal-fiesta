const inputBtn = document.querySelector('#input-btn')
const myLeads = []
const inputEl = document.querySelector('#input-el')

function saveLead() {
    if (inputEl.value) myLeads.push(inputEl.value)
    inputEl.value = ''
    console.log(myLeads);
}

inputBtn.addEventListener('click', saveLead) 