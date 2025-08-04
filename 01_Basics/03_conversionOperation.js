
// checking the score in the different form 
let score = "30abc"

console.log(typeof score)
console.log(typeof (score))

let contvertoNumber = Number(score)

console.log(typeof contvertoNumber)
console.log(contvertoNumber)


// "33" -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0
// null -> 0 
// undefined -> NaN 

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 -> true 
// "" -> false 
// "kasuhik" -> true 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)
