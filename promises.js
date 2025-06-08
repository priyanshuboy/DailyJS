//recived duration value which is 1 sec
function  settimeoutPromisified(duration){

return new Promise(function(resolve){ // passing it to promise class when ever the resolve is called callback function is called
setTimeout(resolve,duration);

})

}

function callback(){
    console.log("1 sec has passed")
}

//settime function called
settimeoutPromisified(1000).then(callback)



