let StartButton = document.getElementById('Start')
let StopButton = document.getElementById('Stop')
let ResetButton = document.getElementById('Reset')
let clockDisplay = document.querySelector('.clock');

let hours =0;
let min = 0;
let sec =0;
let intervalId = null;


function formettimer(unit){
      return unit <10? '0'+unit :unit;
}

function runtimer(){
   sec++;
   if(sec===60){
    min++;
    sec=0;
   }
   if(min===60){
    hours++;
    min=0;
   }
   updatedisplay();
}

function updatedisplay(){
    clockDisplay.textContent =`${formettimer(hours)} : ${formettimer(min)} : ${formettimer(sec)}`;
}


StartButton.addEventListener('click' , ()=>{
       if(intervalId===null){
        intervalId = setInterval(runtimer,1000);
       }
})

StopButton.addEventListener('click' ,()=>{
    clearInterval(intervalId);
    intervalId =null;
})

ResetButton.addEventListener('click' , ()=>{
     clearInterval(intervalId);
     intervalId =null;
     hours =0;
     min=0;
     sec=0;
     updatedisplay()
})

