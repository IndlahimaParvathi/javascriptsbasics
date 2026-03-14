function onClickSplit(){
    debugger;
    Member=parseInt(document.getElementById("txtMembers").value)
    Amount=parseInt (document.getElementById("txtAmount").value)
    Average=Amount/Member
    document.getElementById("pResult").innerHTML=Average
}