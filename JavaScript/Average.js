function onClickAverage(){
debugger;
number1=parseFloat(document.getElementById("txtNum1").value)
number2=parseFloat(document.getElementById("txtNum2").value)
number3=parseFloat(document.getElementById("txtNum3").value)
number4=parseFloat(document.getElementById("txtNum4").value)
number5=parseFloat(document.getElementById("txtNum5").value)
number6=parseFloat(document.getElementById("txtNum6").value)
Average=number1+number2+number3+number4+number5+number6/6
document.getElementById("pResult").innerHTML="result:"+Average ;
}