$(document).ready(function () {
    let cartSum = 0

    if (document.getElementById("cart-main")) {
        // We're on the main cart site
        getCartItemProductsJson().then(function(data) {

            // Create the items
            createCartItemHTML(data.products)

            // Update cart price
            updateCartPrice(data.products)
        })
    }

    function createCartItemHTML(products) {
        let itemContainer = $(".cart-items")

        $.each(products, function(i, obj) {
            let cartRow = $("<div>", {"class": "cart-row"});

            let cartItem = $("<div>", {"class": "cart-item cart-column"});
            let img = $("<img>", {"class": "cart-item-image", "src": obj.firstImage, "width": "100", "height": "100"});
            let title = $("<span>", {"class": "cart-item-title", "text": obj.name});

            let cartPrice = $("<span>", {"class": "cart-price cart-column", "text": "$" + obj.price});

            let cartQuantity = $("<div>", {"class": "cart-quantity cart-column"});
            let input = $("<input>", {"class": "cart-quantity-input", "type": "number",
                "productID": obj.id, "value": getCartItemQuantity(obj.id)});
            let button = $("<button>", {"class": "btn btn-danger cart-item-remove", "productID": obj.id,
                "type": "button", "text": "REMOVE"});

            cartQuantity.append(input).append(button)
            cartItem.append(img).append(title)

            itemContainer.append(cartRow.append(cartItem).append(cartPrice).append(cartQuantity))
        })
    }
})
