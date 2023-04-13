let vinner = document.getElementById("vinner")
let Mbar = document.getElementById("Mprogress")
let Bbar = document.getElementById("Bprogress")
let MscoreE = document.getElementById("mario")
let BscoreE = document.getElementById("bowser")
let trill = document.getElementById("trill")
let Mscore = 0
let Bscore = 0

trill.addEventListener("click", e => {
    let mario = Math.ceil(Math.random() * 6)
    let bowser = Math.ceil(Math.random() * 6)

    if (mario > bowser) {
        vinner.innerHTML = "Mario vannt!"
        Mscore++
        MscoreE.innerHTML = `Mario: ${Mscore}`
        Mbar.style.width = `${Mscore/(Mscore+Bscore) * 100}%`
        Bbar.style.width = `${Bscore/(Mscore+Bscore) * 100}%`
    } else if (bowser > mario) {
        vinner.innerHTML = "Bowser vannt!"
        Bscore++
        BscoreE.innerHTML = `Bowser: ${Bscore}`
        Mbar.style.width = `${Mscore/(Mscore+Bscore) * 100}%`
        Bbar.style.width = `${Bscore/(Mscore+Bscore) * 100}%`
    } else if (bowser == mario) {
        vinner.innerHTML = "Uavgjort!"
    }
})