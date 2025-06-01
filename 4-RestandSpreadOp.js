


//Rest and Spread operator

//-->rest

function addnumber(a,b,c,...others){
    
    console.log(others)

    return a+b+c
}

const res = addnumber(1,2,3,4,5,6)
console.log(res)

//spread :

function sum(x, y, z) {
    console.log(numbe1)
    return x + y + z;

}

const numbers = [1, 2, 3];
const numbe1 = [...numbers,4,5]
console.log(sum(...numbe1)); // 6

