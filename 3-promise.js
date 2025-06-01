
// promise  + callabck
function mydata(a, b){
    return new Promise((resolve, reject) => {
        try {
            b(a, 2);
            resolve();
        } catch (err) {
            reject(err);
        }
    });
}

mydata(1, function callback(a, b){
    console.log(a + b);
}).then(() => {   // use promise
    console.log("callback called");
}).catch(() => {
    console.log("not called");
});



function myfirstcall(b){
    return b(5000)
}


myfirstcall(function second(delay){
      
    setTimeout(() => {
        console.log("called")
    }, delay);

})

