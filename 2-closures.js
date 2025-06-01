


function hello1(){
  

    let message = ' priyanshu ';

     const c = function hello2(){   // this function is a closure function
        console.log('hi ' + message)  // use message variable from parent fun
     }
    
 return c; // when i return message(object) should be destroy but when store function in c and call it it prints the priyanshu which means a 
           // A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing. 
}


c = hello1()
c()