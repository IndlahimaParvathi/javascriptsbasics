function onClickSpeed(){
    debugger;
    time=(document.getElementById("txtTime").value)
    distance=(document.getElementById("txtDistance").value)
    timeInHR=time/60;
    distanceInKM=distance/1000
    speed=distanceInKM/timeInHR;
    document.getElementById("pResult").innerHTML=speed +"km/h"
}


