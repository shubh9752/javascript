

let user=document.querySelector('.user');
let currentTime=document.querySelector('.present');
let userTime=document.querySelector('.usertime');
user.addEventListener("click",function(){
    let user_hour=window.prompt("please enter hour in 24 hour format to set time");
    user_hour=Number(user_hour);
    while(user_hour>=24||user_hour<=-1){
        user_hour=window.prompt("please select correct hour");
    }
    let user_min=window.prompt("please enter minutes format to set time");
    user_min=Number(user_min);
    while(user_min>=60||user_min<=-1){
        user_min=window.prompt("please select correct hour");
    }

    let user_sec=window.prompt("please enter seconds hour format to set time");
    function currentDate(){
        let d=new Date();
        let hour=d.getHours();
        let min=d.getMinutes();
        let sec=d.getSeconds();
        currentTime.textContent=hour+" : "+min+" : "+sec;
        userTime.textContent=user_hour+" : "+user_min+" : "+user_sec;
        if(user_hour==hour&&user_min==min&&user_sec==sec){
            user.textContent="Times over";
        }
        setTimeout(currentDate,1000);

    }
   currentDate();

})