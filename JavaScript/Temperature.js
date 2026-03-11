function onClickConverterFToC(){
    fTemperature=parseFloat(document.getElementById("txttemperature").value)
    fTemperature = cTemperature * 1.8 + 32
      document.getElementById("tempResult").innerHTML = "result:" + fTemperature + "c"

}