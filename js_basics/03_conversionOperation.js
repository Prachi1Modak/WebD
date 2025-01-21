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