function onClickSplit(){
    debugger;
    Member=(document.getElementById("txtMembers").value)
    Amount=(document.getElementById("txtAmount").value)
    Average=Member/Amount
    document.getElementById("pResult").innerHTML=Average
}