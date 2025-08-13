
// stack for (Primitive DataType)

let  MyEmailId  = "kaushikt422@gmail.com"
let  MyEmailId2 = MyEmailId                   //here the copy comes for variable MyEmailId

MyEmailId2 = "yours.@gmail.com"               // the changes not refelect in the MyEmanilId because we change in the copy .

console.log(MyEmailId)                        // here is the original not change 
console.log(MyEmailId2)                       // only change in emailid2


// Heap for (Non Primitive Data Type)

let userOne =  {

    email: "Kaushikt422@gmail.com",
    age : 22
}

let userTwo  = userOne

userTwo.email = "yours@gmail.com"

console.log(userOne,userOne.email)
console.log(userTwo, userTwo.email)