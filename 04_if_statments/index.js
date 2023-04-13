let t0 = new Date().getTime()

for (let i = 0; i <= 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log("Buzz")
        }
    } else {
        console.log(i)
    }
}

let t1 = new Date().getTime()
console.log(`det tok ${t1 - t0}ms`)