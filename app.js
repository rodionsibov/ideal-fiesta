let count = 0
document.querySelector('#increment-btn').addEventListener('click', () => {
    count++
    document.querySelector('#count-el').innerHTML = count
})