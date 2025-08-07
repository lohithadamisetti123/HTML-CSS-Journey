  var time=600;
   setInterval(function(){
         time=time-1
        document.getElementsByClassName("minutes")[0].innerText=parseInt(time/60)
        document.getElementsByClassName("seconds")[0].innerText=time%60

     },1000)