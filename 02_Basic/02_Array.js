
const marvals_heros = ["thor","ironman","loki","hulk","spiderman"]
const dc_heros =  ["superman","flash","aquaman"]

// marvals_heros.push(dc_heros)

// console.log(marvals_heros);
// console.log(marvals_heros[5][1]);  not a good way to merge
 
const all_heros = marvals_heros.concat(dc_heros)
console.log(all_heros);

console.log(all_heros.length);

const all_newHeros = [...marvals_heros,...dc_heros,]
console.log(all_newHeros);

const anotherArray = [1,2,3,[4,5,6],[8,5,6,[8,3,2]]]
const realanotherArray = anotherArray.flat(Infinity)
console.log(realanotherArray);


console.log(Array.isArray("Kaushik"));
console.log(Array.from("kaushik"));
console.log(Array.from({name: "Kaushik"})); // intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







