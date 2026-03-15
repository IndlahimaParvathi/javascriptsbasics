function onClickSpellingPrice(){
    debugger;
    price=(document.getElementById("txtprice").value);
    discountPercentage=(document.getElementById("txtdiscount").value);
    discount =(discountPercentage/100)*price;
    SellingPrice=price-discountpercentage;
    document.getElementById("pResult").innerHtml=result

} 