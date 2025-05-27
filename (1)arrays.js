
let array = [4,5,6,32,21,23] 
    console.log(array.slice(2,5))
    console.log(array)
    array.splice(1,2,'priyanshu') 
     console.log(array)
    let res = array.map(function(number){  
         return number%2==0 ? number*number : "oddnumber"
     })
  console.log(res)
// let val = array.filter((number) =>{
//       return number%2 === 0

// })
let myarray = [3,4,22,3]

myarray.concat([6,7])
console.log(myarray)

