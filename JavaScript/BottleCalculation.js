function onClickBottle(){
    debugger;
    
     liters=(document.getElementById("txtLiters").value)
     bottles=  liters/1.5
     document.getElementById("pResult").innerHTML=Math.ceil(bottles);


}