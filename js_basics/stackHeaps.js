//all primitive datas get stored in stack
//copy gets made
let myname="abc"
let anothername=myname
console.log(anothername)
anothername="pqr"
console.log(anothername)

//all non primitive data gets stored in heap
//no copy being made, multiple instances point to one entity only
let user={
    email:"abc@gmail.com",
    name:"pqr"
}
let user01=user
user01.name="abc"
console.log(user01.email)
console.log(user01.name)