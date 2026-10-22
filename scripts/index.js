let price = prompt("what is the price", "$49.99");
if (price != null) {
    let price2 = price.slice(1);
   let price3 = parseFloat(price2);
   let price4 = Math.round(price3 / 1.1);
   let price5 = price4 - 0.01;
   let price6 = String(price5)
   console.log("Your new price is: " + "$" + price6);
}