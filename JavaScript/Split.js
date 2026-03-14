function onClickSplit(){
    debugger;
    Member=parseFloat(document.getElementById("txtMembers").value)
    Amount=parseInt (document.getElementById("txtAmount").value)
    Average=Member/Amount
    document.getElementById("pResult").innerHTML=Average
}