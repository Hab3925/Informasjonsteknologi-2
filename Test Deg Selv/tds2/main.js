let en = document.getElementById("en")
let ti = document.getElementById("ti")
let fjern = document.getElementById("fjern")
let grid = document.getElementById("grid")

en.addEventListener("click", e => {
    grid.innerHTML += '<div class="box">🔥</div>'
})
ti.addEventListener("click", e => {
    for (i = 0; i < 10; i++) {
        grid.innerHTML += '<div class="box">🔥</div>'
    }
})
fjern.addEventListener("click", e => {
    grid.innerHTML = ""
})