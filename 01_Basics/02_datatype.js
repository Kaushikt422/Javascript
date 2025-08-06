//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


let name1 = "kaushik" //string
let number = 34344;   // number 

let bool = true       //boolean

let temperature = null  // Null
let notAssignedYet

let myNumber = Symbol("123") // symbol
let myNumber2 = Symbol("123")
const bigNumber = 3456543576654356754n  // bigint


console.log(typeof(name1))
console.log(typeof number)
console.log(typeof(bool))
console.log(typeof temperature)
console.log(typeof notAssignedYet)
console.log(typeof myNumber)
console.log(typeof bigNumber)

console.log(myNumber==myNumber2); //false because Symbol do it unique
console.log(myNumber)  // how symbol print

// Reference (Non primitive)

// Array, Objects, Functions

let arrExample = ["Kaushik", "Kartik", 'Prince', "om"]  //array

let myfirstObj = {                                      //object
        
    name: "Kaushik",
    age: 21

}

const myFunction = function(){
    console.log("hello")
}

console.log(typeof arrExample)
console.log(typeof myfirstObj)
console.log(typeof myFunction)

console.log(arrExample)

console.log(myfirstObj)
myFunction()