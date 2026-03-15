function onClickSellingPrice(){
    debugger;
    price=(document.getElementById("txtprice").value);
    discountPercentage=(document.getElementById("txtDiscountPercentage").value)
    discount =(discountPercentage/100)*price;
    SellingPrice=price-discount;
    document.getElementById("pResult").innerHTML=SellingPrice;

} 