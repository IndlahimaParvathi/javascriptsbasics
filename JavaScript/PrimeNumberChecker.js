function onClickPrimeNumber(){
    debugger;
    var number=parent(document.getElementById("txtPrimenumber").value)
    if (number%2==0) {
    document.getElementById("pResult").innerHTML= number+ " is Prime Number" ;

 }
  else;

{
  document.getElementById("pResult").innerHTML= number+ " is Not Pime Number" ;

 }
}

