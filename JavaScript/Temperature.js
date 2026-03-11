function onClickConverterFToC(){
    debugger;
    fTemperature=parseFloat(document.getElementById("txttemperature").value)
    cTemperature = fTemperature * 1.8 + 32
      document.getElementById("tempResult").innerHTML = "result:" + cTemperature + "c"

}