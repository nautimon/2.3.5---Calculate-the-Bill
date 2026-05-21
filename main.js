//My Code
function calculateBillTotal(subtotal){
    var tax = subtotal * 0.095;
    var tip = subtotal * 0.2;
    var total = subtotal + tip + tax;
    return total;
}

console.log(calculateBillTotal(20))