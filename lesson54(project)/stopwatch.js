let ms=0,s=0,min=0,hr=0;
let startcounter=true;
let buttoncounter=true;
let a=[];
i=-1;
function reset(){
    screen="00:00:00:00";
    document.getElementById("timer").textContent=screen;
    ms=0,s=0,min=0,hr=0;
    temp=-1;
    startcounter=false;
    document.getElementById("tablebody").innerHTML="";
    document.getElementById("capshun").innerHTML=``;
      document.getElementById("tablehead").innerHTML=``;
      i=-1;
}
function run(){
    if(startcounter){
    ms++;
    if(ms>=100){
        s++;
        ms=0;
    }
    if(s>=60){
        min++;
        s=0;
    }
     if(min>=60){
        hr++;
        min=0;
    } 
    screen=`${hr.toString().padStart(2,0)}:${min.toString().padStart(2,0)}:${s.toString().padStart(2,0)}:${ms.toString().padStart(2,0)}`;
 document.getElementById("timer").textContent=screen;
    }
}
function getdifference(){
     result=ms+(s*1000)+ (min*60000)+(hr*3600000);
     return result;
}
function getlapscreen(){
    currentime=getdifference();
    i++;
if(i>0){
temp=currentime-previoustime;
}
else{
    temp=0;
    document.getElementById("capshun").innerHTML=`Laps`;
    document.getElementById("tablehead").innerHTML=`<tr>
      <th class="left">S No.</th>
      <th class="middle">Time </th>
      <th class="right"> Split Time</th>
    </tr>`
}

tempscreen= `<tr>
      <td class="left"><center>${i+1}</center></td>
      <td class="middle"><center>${screen}</center></td>
      <td class="right"><center>${(temp/1000).toFixed(2)} s</center></td>
    </tr>
    `
    previoustime=currentime;
    document.getElementById("tablebody").innerHTML+=`${tempscreen}`;
}

document.getElementById("lap").onclick=function(){
getlapscreen();
}


document.getElementById("start").onclick=function(){
                startcounter=start;
                if(buttoncounter){
                setInterval(run,10);
                buttoncounter=false;
                }
}

document.getElementById("stop").onclick=function(){
startcounter=false;
}

document.getElementById("reset").onclick=function(){

       reset();
}