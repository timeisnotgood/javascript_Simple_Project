let start = document.querySelector('.startstop');
let reset  = document.querySelector('.reset');
let timer = document.querySelector('.timer');




let seconds = 0;
let minute = 0;
let hour = 0;




let leadingSecond = 0;
let leadingminute = 0;
let leadinghour = 0;



let timerinterval = null;
let timerstatus = "stopped";



function stopwatch(){
    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minute ++;

        if(minute / 60 === 1){
            minute = 0;
            hour ++;
        }
    }

    if (seconds < 10) {
        leadingSecond ="0"+ seconds.toString();
    }else{
        leadingSecond =seconds;
    }

    if (minute <10) {
        leadingminute ="0"+ minute.toString();
    }else{
        leadingminute =minute;
    }
    if (hour <10) {
        leadinghour ="0"+ hour.toString();
    }else{
        leadinghour =hour;
    }

    let distimer = document.querySelector('.timer').innerHTML = leadinghour + ":"+leadingminute+":"+leadingSecond;
}

// window.setInterval(stopwatch,1);





start.addEventListener("click",function(){
    if(timerstatus ==="stopped"){
        timerinterval = window.setInterval(stopwatch,1000);
        document.querySelector('.startstop').innerHTML = '<i class="fa fa-pause" id="pause"></i>';
        timerstatus = "Started";
    }else{
        window.clearInterval(timerinterval);
        document.querySelector('.startstop').innerHTML ='<i class="fa fa-play" id="play"></i>';
        timerstatus = "stopped";
    }

});



reset.addEventListener("click",function(){
    window.clearInterval(timerinterval);
    timerinterval = window.setInterval(stopwatch,1000);
    seconds = 0;
    hour = 0;

    document.querySelector('.timer').innerHTML = "00:00:00";
})