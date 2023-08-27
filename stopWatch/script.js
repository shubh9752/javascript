let ms=0,sec=0,min=0;
let counter;
let start=document.querySelector(".start");
let stop=document.querySelector(".stop");
let reset=document.querySelector(".reset");
let time=document.querySelector(".time")

start.addEventListener("click", function(){
    if(!counter){
        counter=setInterval(run,10);
    }
     
     function run(){
        time.textContent=timer();
        ms++;
        if(ms==100){
            ms=0;
            sec++;       
        }
        if(sec==60){
            sec=0;
            min++;
        }
        
     }
})
stop.addEventListener("click", function(){
    clearInterval(counter);
    counter=false;
})

reset.addEventListener("click",function(){
    clearInterval(counter);
    counter=false;
    min=0,sec=0,ms=0;
    time.textContent=timer();
    
})

function timer(){
    return ms+":"+sec+":"+min;
}