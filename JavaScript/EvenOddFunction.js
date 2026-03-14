function onClickEvenOdd(){
    debugger;
 EvenOdd=parseFloat(document.getElementById("txtEvenOdd").value)

 let remainder=(number%2)
 if(remainder==0){
    document.getElementById("pResult").innerHTML="Even"
 }
if(remainder!=0){
    document.getElementById("pResult").innerHTML="Odd"
}
}


















