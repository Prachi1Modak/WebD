let today=new Date()
console.log(today)      //2025-01-22T14:30:35.203Z
console.log(today.toString())       //Wed Jan 22 2025 14:30:59 GMT+0000 (Coordinated Universal Time)
console.log(today.toDateString())       //Wed Jan 22 2025
console.log(today.toLocaleString())     //1/22/2025, 2:32:10 PM
console.log(typeof Date)


let mydate1= new Date(2023,0,23)     //0 here means january month    Mon Jan 23 2023
console.log(mydate1.toDateString())
let mydate2= new Date(2023,0,23,5,33)
console.log(mydate2.toLocaleString())

let mydate3=new Date("02-17-2024")      //month-date-year
console.log(mydate3)
let mydate4=new Date("2024-02-17")      //year month date
console.log(mydate4)

let timeStamp=Date.now()
console.log(timeStamp)      //time in milli seconds from some date in the 1970s

console.log(Math.floor(Date.now()/1000))        //convert to seconds

console.log(timeStamp.getMonth())
console.log(timeStamp.getDay())


timeStamp.toLocaleString('default',{
    weekday:"long"
})