let klokke = document.getElementById("klokke")

setInterval(() => {
    let timer = new Date().getHours()
    let minutt = new Date().getMinutes()
    let sekund = new Date().getSeconds()
    let hundredelsSekund = new Date().getMilliseconds() * 10
    if (timer.toString().length == 1) timer = `0${timer}`
    if (minutt.toString().length == 1) minutt = `0${minutt}`
    if (sekund.toString().length == 1) sekund = `0${sekund}`
    if (hundredelsSekund.toString().length == 1) hundredelsSekund = `0${hundredelsSekund}`
    klokke.innerHTML = `${timer}:${minutt}:${sekund}.${hundredelsSekund.toString().charAt(0)}${hundredelsSekund.toString().charAt(1)}`
}, 10);