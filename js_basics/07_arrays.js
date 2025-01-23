const arr0=[2,5,4,7,8,false, "abc"]
//can be resizable, and of mixed datatypes
const arr=[2,4,5,8,3]
console.log(arr[0])

//js makes shallow copies
const arraynew= new Array(4,5,9,3,2)
console.log(arraynew[3])

//ARRAY METHODS:
arr.push(10)
console.log(arr)

arr.push(1)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(23)
console.log(arr)        //adds in the start

arr.shift()
console.log(arr)       //removes the first element

console.log(arr.includes(100))      //false
console.log(arr.indexOf(100))       //-1 as does not exist in the array
console.log(arr.indexOf(10))

const arrString=arr.join()      //outputs as string
console.log(arr)
console.log(arrString)      

//slice and splice
console.log("A", arr)
let sliced=arr.slice(1,3)       //includes 1,2 and exludess 3
//slice only outputs a copy, does not make any changes to the actual array
console.log(sliced)
console.log(arr)


console.log("A", arr)
let spliced=arr.splice(1,3)       //includes 1,2 and 3
//slice only outputs a copy, does not make any changes to the actual array
//but splice, it manipultes the original array, and also includes the end index
console.log(spliced)
console.log(arr)



const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)
console.log(marvel_heros)       //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//push does operations on existing arrays

//concat does all operations on a new array, dosent change original
const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)       /*[
    'thor',
    'ironman',
    'spiderman',
    [ 'superman', 'flash', 'batman' ],
    'superman',
    'flash',
    'batman'
  ]*/


    //spread operator
    const all_new_heros=[...marvel_heros,...dc_heros]
    console.log(all_new_heros)

    const new_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
    const new_arrays=new_arr.flat(Infinity)
    console.log(new_arrays)     //[1,2,3,4,5,6,7,6,7,4,5]

    console.log(Array.isArray("abcpqr"))        //false
    console.log(Array.from("abcpqr"))       //[ 'a', 'b', 'c', 'p', 'q', 'r' ]

    let s1=100, s2=200, s3=300
    console.log(Array.of(s1,s2,s3))     //[ 100, 200, 300 ]