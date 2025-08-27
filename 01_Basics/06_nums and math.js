
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance));                 // object 
console.log(score.toFixed(2));  // 2 digit decimal number

const anothernumber = 123.8755241
console.log(anothernumber.toPrecision(1));
console.log(anothernumber.toPrecision(2));
console.log(anothernumber.toPrecision(3));

const hunderds = 1000000000
console.log(hunderds.toLocaleString());


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.8));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(4,5,5,1,22));
console.log(Math.max(4,5,5,1,22));
console.log(Math.sqrt(55).toFixed(2));
console.log(Math.random()*10+1);

const min = 10 
const max = 20 
console.log(Math.floor(Math.random()*(max-min + 1)+min));







