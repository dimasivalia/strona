let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let bg3 = document.getElementById('bg3')
let running = document.getElementById('running')

console.log(running)

bg1.addEventListener('input',() => {
    running.style.backgroundImage = 'url(./photo/running-bg-1.jpg)'
}) 

bg2.addEventListener('input',() => {
    running.style.backgroundImage = 'url(./photo/running-bg-2.jpg)'
})

bg3.addEventListener('input',() => {
    running.style.backgroundImage = 'url(./photo/running-bg-3.jpg)'
})

let bgs = [bg1,bg2,bg3]
