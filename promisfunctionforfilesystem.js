
const fs  = require("fs")

function readfileasync(){
    return new Promise(function(resolve,reject){

        fs.readFile("a.txt" , "utf-8" , function(err,data){

            if(err){
                console.log("file not found")
            }
            else{
                resolve(data)
            }

        })

    })
}

readfileasync().then(function(x){
    console.log("file has been read " + x)
}).catch(function(e){
    console.log(e)
})


