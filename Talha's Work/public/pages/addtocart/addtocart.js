var product_total_amt = document.getElementById("product_total_amt")
var products_total_amt = document.getElementById("products_total_amt")
var shipping_charges = document.getElementById("shipping_charges")
var total_cart_amt = document.getElementById("total_cart_amt")
var add = document.getElementById("add")


const decreaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec)
        // console.log(itemval.value)
    var itemprice = document.getElementById(itemprice)
    if (itemval.value <= 0) {
        itemval.value = 0
        err.innerHTML = "Negative Quantity is not allowed"
    } else {
        itemval.value = parseInt(itemval.value) - 1
        itemval.style.background = "fff"
        itemval.style.color = "#000"
        product_total_amt.innerHTML = parseInt(itemprice.innerHTML) * parseInt(itemval.value)
        products_total_amt.innerHTML = parseInt(product_total_amt.innerHTML)
        total_cart_amt.innerHTML = parseInt(products_total_amt.innerHTML) + parseInt(shipping_charges.innerHTML)

    }
}
const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec)
    var itemprice = document.getElementById(itemprice)
    if (itemval.value >= 5) {
        itemval.value = 5
        err.innerHTML = "Max 5 allowed"
        itemval.style.background = "red"
        itemval.style.color = "#fff"

    } else {
        itemval.value = parseInt(itemval.value) + 1
        product_total_amt.innerHTML = parseInt(itemprice.innerHTML) * parseInt(itemval.value)
        console.log(product_total_amt)
        products_total_amt.innerHTML = parseInt(product_total_amt.innerHTML)
        total_cart_amt.innerHTML = parseInt(products_total_amt.innerHTML) + parseInt(shipping_charges.innerHTML)



    }
}