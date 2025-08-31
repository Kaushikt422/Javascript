//singleton
// object.create
// object literals

const mySym = Symbol("Key1")

const myobject = {
    name : "kaushik",
    "full_Name": "Kaushik Tiwari",
    [mySym] : "mykey1",
    age : 23,
    location : "deoria",
    email: "kaushikt422@gmail.com",
    isloggedIn: false,
    lastloginday:["Monday","Saturday"]
}

console.log(myobject.email);
console.log(myobject["email"]);
console.log(myobject["full_Name"]);
console.log(myobject[mySym]);



