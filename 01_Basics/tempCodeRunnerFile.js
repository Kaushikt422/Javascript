
let myName = "Kaushik"
let age = 22 
// console.log("myName"+ age);       //old method

console.log(`hello my name is ${myName} and my age is ${age}`)  // here we use place holder this method called string interpolation because of place holder we use methods like myName.toupper

const gameName = new String ('Kaushik-Tiwari')       //another method to declear a string
console.log(gameName);
console.log(gameName.length)
console.log(gameName.indexOf('a'));
console.log(gameName.toUpperCase());
console.log(gameName[0]);
console.log(gameName.charAt(2));

const newString = gameName.substring(0,4)  /// slicing but in this method we can not count at four and negative numbers are not allowed
console.log(newString);


const anotherString = gameName.slice(-4)  // on this here we can put the negative number
console.log(anotherString);

const anotherString2 = gameName.split("-")
console.log(anotherString2);

const anotherString3 = "     Kaushik     "
console.log(anotherString3.trim());

const url = "https://kaushiktiwari.com/kaushik%20t422"

console.log(url.replace('%20','-'));
console.log(url.includes('kaushik'));

const anotherString4 = "kaushik-tiwari-deoria"
console.log(anotherString4.split('-','2'));





