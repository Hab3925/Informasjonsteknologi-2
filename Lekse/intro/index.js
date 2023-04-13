// Oppgave 1 

let tall1 = 3
let tall2 = 6

console.log(`//Oppgave 1 \n\nSummen er ${tall1 + tall2}, differansen er ${tall1 - tall2}, produktet er ${tall1 * tall2}\n`)


// Oppgave 2
let array = [1, 5, -2, 5, 72, 3, 7, -3, 80, -48, 89]

let tall = []
let partall = 0;
let negative = 0;
let sum = 0;

array.forEach(e => {
    tall.push(e)
    if (e % 2 == 0) partall++
    if (e < 0) negative++;
    sum += e;
})

console.log(`// Oppgave 2 \n\nTallene i arrayen er: ${tall.join(', ')} \nDet er ${partall} partall i arrayen \nDet er ${negative} negative tall i arrayen \nSummen av tallene i arrayen er ${sum}`)