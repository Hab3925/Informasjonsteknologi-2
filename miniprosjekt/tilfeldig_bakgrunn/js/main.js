window.addEventListener("keyup", e => {
    let kode = document.getElementById("fargekode")

    if (e.code == "Space") {
        let i = 0
        let loop = setInterval(() => {
            let fargekode = genererKode()
            document.body.style.backgroundColor = fargekode
            kode.innerHTML = fargekode
            i++
            if (i > 10) clearInterval(loop)
        }, 100);
    }
})


let genererKode = () => {
    let fargekode = '#'
    let nummer = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        fargekode += nummer.charAt(Math.floor(Math.random() * nummer.length))
    }
    return fargekode
}