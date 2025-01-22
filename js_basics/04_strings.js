const name="abc"
const repoCount=8
console.log(name+repoCount)     //dont use

//use this religiously
console.log(`hello my name is ${name}, and my repository count is ${repoCount}`)

const hey=new String("yello")
console.log(hey)
console.log(hey[0])
console.log(hey.length)
console.log(name.length)
console.log(`this is me trying, to do upper camse of name: ${name}  `)
console.log(name.toUpperCase())

const str="helloThisisPrachi"
const newstr=str.substring(5,)
console.log(newstr)     //ThisisPrachi

const string3=str.slice(-1,8)
console.log(string3)

const string4="    abcdef        "
console.log(string4)
console.log(string4.trim())     //works only for new line and whitespace characters only

const url="https://abc.com/abcpqr%20abcpqr"
console.log(url.replace('%20','---'))       //https://abc.com/abcpqr---abcpqr
console.log(url.includes('abc'))        //true

console.log()