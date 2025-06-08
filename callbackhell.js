setTimeout(function(){      // this is an callback hell which calls setimeout inside the settimeout you can write settimeout if required.
    console.log("hi")       // this look kinda tough to read 
    setTimeout(function(){
        console.log("hello")
        setTimeout(function(){
            console.log("hi there")
        },5000)
    },3000)
},1000)


//promise chaining : another method for callback hell

function  settimeoutPromisified(duration){

    return new Promise(function(resolve){ 
    setTimeout(resolve,duration);
    
    })
    
    }

settimeoutPromisified(1000).then(function(){
    console.log("hi")
    settimeoutPromisified(3000).then(function(){
        console.log("hello")
        settimeoutPromisified(5000).then(function(){
            console.log("hello there")
        })
    })
})

// another method called Async await :

function  timeoutPromisified(duration){

    return new Promise(function(resolve){ 
    setTimeout(resolve,duration);
    
    })
    
    }


    async function solve() {
        
       await timeoutPromisified(7000)
       console.log("hi")
       await timeoutPromisified(3000)
       console.log("hello")
       await timeoutPromisified(5000)
       console.log("hello there")
        
    }

    solve()