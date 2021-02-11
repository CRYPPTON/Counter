function makeR(){
    var d = document.getElementById("day").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    var dt = new Date(`${y}-0${m}-0${d}`);
    return dt;
   }
function start(){   
    setInterval(time_, 1000);   
}

function time_(){
    var myDate = makeR()
    var date = new Date;
    
var day = Math.floor(Math.abs(date-myDate)/1000/60/60/24);
var sat = Math.floor(Math.abs(date-myDate)/1000/60/60%60);
var min = Math.floor(Math.abs(date-myDate)/1000/60%60);
var sec = Math.floor(Math.abs(date-myDate)/1000%60);

document.getElementById("d").innerHTML = day+"<br>dan";
document.getElementById("h").innerHTML = sat+"<br>sat";
document.getElementById("m").innerHTML = min+"<br>min";
document.getElementById("s").innerHTML = sec+"<br>sek";

console.log(`${day} Dana ${sat} Sati ${min} Minuta ${sec} Sekundi`)

}




