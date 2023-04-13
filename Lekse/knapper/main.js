let poengE = document.getElementById("poeng")
let input = document.getElementById("input")
let poeng = 0

input.addEventListener('click', (e) => {
    poeng++
    poengE.innerHTML = poeng
})