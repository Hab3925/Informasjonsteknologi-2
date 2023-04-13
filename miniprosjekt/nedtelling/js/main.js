let helg = new Date("2020 Sep 18 13:25:00").getTime()
let output = document.getElementById("nedtelling")

setInterval(() => {
    let nå = new Date().getTime()
    output.innerHTML = nedtelling(nå, helg)
}, 1000);

let nedtelling = (start, stop) => {
    let distanse = stop - start;
    let dager = Math.floor((distanse % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    let timer = Math.floor((distanse % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutter = Math.floor((distanse % (1000 * 60 * 60)) / (1000 * 60));
    let sekunder = Math.floor((distanse % (1000 * 60) / 1000));

    if (distanse > 0) {
        return `${dager}d ${timer}t ${minutter}min ${sekunder}sek`
    } else return "Nå!"
}