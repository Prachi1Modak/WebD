let score="33"
console.log(typeof score)

let scoreInNumber= Number(score)
console.log(typeof scoreInNumber)

// here its correct till now, a number in sting format is changed into a number in Number format, note captical N

//lets check this here:
let a="33abc"
console.log(typeof a)

let a1=Number(a)
console.log(typeof a1)      //->gives outup as number

console.log(a1)     //->gives output as NaN

//Why is a NaN being outputted as a Number?

//lets check this here:
let b=null
console.log(typeof b)       //->object

let b1=Number(b)
console.log(typeof b1)       //->number

console.log(b1)     //->0

//lets check this here:
let c=undefined
console.log(typeof c)       //->undefined

let c1=Number(c)
console.log(typeof c1)       //->number

console.log(c1)     //->nan

//lets check this here:
let d=true
console.log(typeof d)       //->boolean

let d1=Number(d)
console.log(typeof d1)       //->number

console.log(d1)     //->1


let isLoggedIn=1
let boolIsLoggedIn=Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(boolIsLoggedIn)


//************************OPERATIONS************************** */
let s1="hello"
let s2=" whatchu doin?"
console.log(s1+s2)

console.log("1"+2)
console.log(1+"2")

console.log(typeof("1"+2))
console.log(typeof(1+"2"))


console.log("1"+2+2)        //->122
console.log(1+2+"2")        //->32

//jahase string aata hai, uske baadse its treated as a string, else it is treated as a number!!

console.log(true)       //true
console.log(+true)      //1
console.log(+"")        //0


/************************************************************************/
console.log("2">1)      //true
console.log("02">1)     //true

//always try to use same datatypes

console.log(null>0)     //false
console.log(null==0)     //false        
console.log(null>=0)     //true     when such comparision is made, js turns null into 0

// strict check, ===, not just values, but even datatypes
