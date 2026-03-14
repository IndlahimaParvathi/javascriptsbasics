// function onClickEvenOdd(){
//     debugger;
//  EvenOdd=parseFloat(document.getElementById("txtEvenOdd").value)

//  remainder=(EvenOdd%2)
//  if(remainder==0){
//     document.getElementById("pResult").innerHTML="Even"
//  }
// if(remainder!=0){
//     document.getElementById("pResult").innerHTML="Odd"
// }
// }


function onClickEvenOdd(){
    debugger;

 var  number= parseInt(document.getElementById("txtEvenOdd").value);
 if (number%2==0) {
    document.getElementById("pResult").innerHTML= number+ " is Even Number" ;

 }
  else;

{
  document.getElementById("pResult").innerHTML= number+ " is Odd Number" ;

 }
}

















