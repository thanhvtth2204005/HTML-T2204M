var t=10;
var t1=0;
var s=setInterval(function(){
     if(t==0 && t1==0){
         clearInterval(s);
     }
     if(t1<10){
         console.log(+t +':'+'0'+t1);
    }
     if(t1 >= 10){
     console.log(+t +':'+t1);
     }
    if(t1==0){
        t--;
         t1=60;
     }
     t1--;
},1000)