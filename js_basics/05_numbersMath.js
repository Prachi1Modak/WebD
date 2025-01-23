const score=400
const s=new Number(200)
console.log(typeof score)
console.log(typeof s)

console.log(score.toFixed(2))       //2 digits after the decimal
const score1=251.541
console.log(score1.toPrecision(4))      //251.5
console.log(score1.toPrecision(3))      //252

const hundereds=1000000
console.log(hundereds.toLocaleString())
console.log(hundereds.toLocaleString('en-IN'))

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


/******************************************************/
console.log()
console.log(Math.abs(-10))
console.log(Math.round(4.6))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,9,2,3))
console.log(Math.max(4,5,9,2,3))

console.log()
console.log(Math.random())      //gives values only between 0 and 1, inclusive of both
console.log(Math.random()*10+1)

const min=10
const max=20

//generic formuls, to keep random it between min and max 
console.log(Math.floor(Math.random()*(max-min+1))+min)