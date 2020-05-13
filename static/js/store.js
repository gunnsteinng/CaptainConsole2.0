function emptyCart() {
    $.each(localStorage, function(id, quantity){
        let splitID = id.split('-')
        if (splitID.length === 2 && splitID[0] === 'product') {
            localStorage.removeItem(id)
        }
    })
}

// Get products from local storage - returns array containing array pairs for product id and quantity as integers
function getProductsInCart() {
    let products = []
    $.each(localStorage, function (id, quantity) {
        if (id != null) {
            let splitID = id.split('-')
            if (splitID.length === 2 && splitID[0] === 'product') {
                products.push([parseInt(splitID[1]), parseInt(quantity)])
            }
        }
    })
    return products
}

function getCartProductIDs() {
    let productIDs = []
    $.each(getProductsInCart(), function(i, object){
        productIDs.push(object[0])
    })
    return productIDs
}

function getCartItemProductsJson() {
    return $.getJSON( "/cart/cart_item_detail?product=" + getCartProductIDs().join('-'), function(data) {
        localStorage.setItem("cart-items", JSON.stringify(data.products))
    })
}

function getCartSum(products) {
    let sum = 0
    $.each(products, function(i, obj) {
        let quantity = getCartItemQuantity(obj.id)
        sum += quantity * obj.price
    })
    return sum.toFixed(2)
}

function getCartItemQuantity(productID) {
    let quantity = (localStorage.getItem('product-' + productID))
    return quantity == null ? null : parseInt(quantity)
}

function setCartItem(productID, quantity) {
    localStorage.setItem('product-' + productID, quantity)
}

function removeCartItem(productID) {
    localStorage.removeItem('product-' + productID)
}

function countCartItems() {
    let products = getProductsInCart()
    let sum = 0
    $.each(products, function(i, obj) {
        sum += obj[1]
    })
    return sum
}

function addOrUpdateCart(productID, quantity) {
    let oldQuantity = getCartItemQuantity(productID)
    if (oldQuantity == null) {
        setCartItem(productID, quantity)
    }
    else {
        setCartItem(productID, (oldQuantity + quantity))
    }
}

function updateCartLink() {
    let sum = countCartItems()
    if (sum > 0) {
        $("#cart-link").text("My Cart (" + sum + ")")
    }
    else {
        $("#cart-link").text("My Cart")
    }

}

updateCartLink()

function updateCartPrice(products) {
    if (products == null) {
        let fromStorage = JSON.parse(localStorage.getItem("cart-items"))
        $(".cart-total-price").text("$" + getCartSum(fromStorage))
    }
    else {
         $(".cart-total-price").text("$" + getCartSum(products))
    }
}

// Add to cart
$(".add-to-cart").click(function() {
    let productID = $(this)[0].getAttribute("productID")
    addOrUpdateCart(productID, 1)

    updateCartLink()
})

// Update quantity of item in cart
$("#cart-main").on("change", ".cart-quantity-input", function() {
    let input = $(this)[0]
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    let productID = input.getAttribute("productID")
    setCartItem(productID, input.value)

    updateCartLink()
    updateCartPrice()
})

// Remove item from cart
$("#cart-main").on("click", ".cart-item-remove", function() {
    let productID = $(this)[0].getAttribute("productID")
    removeCartItem(productID)

    // Remove the dynamically generated html itself
    $(this).parents(".cart-row")[0].remove()

    updateCartLink()
    updateCartPrice()
})


