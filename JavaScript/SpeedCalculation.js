function onClickSpeed(){
    debugger;
    time=(document.getElementById("txtTime").value)
    distance=(document.getElementById("txtDistance").value)
    timeInHR=Time/60;
    distanceInKM=Distance/1000
    Speed=Distance/Time
    document.getElementById("pResult").innerHTML=Speed
}


