
const  myArr = [0,1,2,5,8,9]
const strArr =["Kaushik","Tiwari"]

const newArr = new Array(1,4,5,6)
console.log(newArr[3]);
console.log(strArr[1]);

// Array methods

newArr.push(20,22)
console.log(newArr);
newArr.pop()
console.log(newArr);

newArr.unshift(9,12)
console.log(newArr);
newArr.shift()
console.log(newArr);

console.log(newArr.includes(9));
console.log(newArr.indexOf(5));

// const myArrJoin = newArr.join()
// console.log(myArrJoin);


// slice,splice 

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log("c",myArr);  /// original arrr change




