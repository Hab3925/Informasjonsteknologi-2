// Oppgave 1

// a) 

console.log('"Programmering er veldig "kult"!"')

// c) 

let gate = 'Kongens gate'
let husnr = 432
let oppgang = "b"

adresse = `${gate} ${husnr} ${oppgang}`
console.log(adresse)

// d)

console.log(`Adressen er ${gate} ${husnr}${oppgang} \nGaten er ${gate}, husnummeret er ${husnr}, oppgang ${oppgang}`)

// Oppgave 2

// a)
let tall = 1000;
// b)
let divisjon = Math.floor(1000 / 23);
// c)
let multiplikasjon = divisjon * 23;

// Oppgave 3

// d)
let blomster = 150;
let økningPrUke = 0.15;
let uker = 10

blomsterOmEnUke = blomster + blomster * økningPrUke

console.log(`${blomsterOmEnUke * 10}`)

// Oppgave 4

let pris = 850;
let studentRabatt = 0.25;
let tips = 0.10;
let personer = 3

let totalpris = pris - pris * studentRabatt + (pris - pris * studentRabatt) * tips;

let prisPrPers = totalpris / personer

console.log(`totalpris: ${totalpris}, personer: ${personer}, pris per person: ${prisPrPers}`)

// Oppgave 5

let ingridienser = [{
        navn: "smør",
        mengde: 100,
        enhet: "g"
    },
    {
        navn: "hvetemel",
        mengde: 180,
        enhet: "g"
    },
    {
        navn: "sukker",
        mengde: 350,
        enhet: "g"
    },
    {
        navn: "egg",
        mengde: 4,
        enhet: ""
    },
    {
        navn: "bakepulver",
        mengde: 1,
        enhet: "ts"
    }
]

let input = document.getElementById("mengde")
let output = document.getElementById("output")

let justerMengde = () => {
    input.addEventListener("keyup", function (event) {
        if (input.value.match(/[a-zA-Z]/gm) !== null) return output.innerHTML = "Du må skrive et tall!";

        ingridienser.forEach(i => {
            let mengde = i.mengde / 36 * input.value;
            document.getElementById(i.navn).innerHTML = `${mengde.toFixed(2)} ${i.enhet}`
        })
    })
}


// Oppgave 6

let pi = 3.141592
let radius = document.getElementById("radius")
let høyde = document.getElementById("høyde")
let err = document.getElementById("error")
let omkrets = document.getElementById("omkrets")
let arealg = document.getElementById("arealg")
let volum = document.getElementById("volum")
let arealo = document.getElementById("arealo")

let h = []
let r = []
let volumSylinder = () => {

    radius.addEventListener("keyup", function (event) {
        if (radius.value.match(/[a-zA-Z]/gm) !== null) return err.innerHTML = "Du må skrive et tall!";
        r[0] = radius.value
        if (!h[0]) return err.innerHTML = "Du har ikke skrevet inn høyde enda!"
        omkrets.innerHTML = (2 * r[0] * pi).toFixed(2)
        arealg.innerHTML = (pi * r[0] * r[0]).toFixed(2)
        volum.innerHTML = (pi * r[0] * r[0] * h[0]).toFixed(2)
        arealo.innerHTML = (2 * pi * r[0] * (r[0] + h[0])).toFixed(2)

    })
    høyde.addEventListener("keyup", function (event) {
        if (høyde.value.match(/[a-zA-Z]/gm) !== null) return err.innerHTML = "Du må skrive et tall!";
        h[0] = radius.value

        if (!r[0]) return err.innerHTML = "Du har ikke skrevet inn radius enda!"
        omkrets.innerHTML = (2 * r[0] * pi).toFixed(2)
        arealg.innerHTML = (pi * r[0] * r[0]).toFixed(2)
        volum.innerHTML = (pi * r[0] * r[0] * h[0]).toFixed(2)
        arealo.innerHTML = (2 * pi * r[0] * (r[0] + h[0])).toFixed(2)
    })
}