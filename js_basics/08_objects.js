//singleton
//constructor se singleton banega, literals se singleton nhi banega

const mysym=Symbol("mykey")

const user={
    name:"abc",
    age:23,
    email:"abc@gmail.com",
    password:"pqrabc",
    "logged_in":false,
    [mysym]:"keyinitialiedinobj"
}

console.log(user.email)
console.log(user["email"])
// console.log(user."logged_in")     //error, cant access like this
console.log(user["logged_in"])


//how symbols are used in object
console.log(user[mysym])

user.email="abc@chatgpt.com"

//Object.freeze(user)     //this enables that no changes can be made to the user now on, now error would be thrown, but changes would not go through

user.email="abc@microsoft.com"
console.log(user)

user.greeting=function(){
    console.log(`hello ${user.name}`);
}

user.greetings=function(){
    console.log(`hello ${this.name}`);
}
console.log(user.greeting())      
console.log(user.greetings())