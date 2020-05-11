if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('trash-button')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('form-control form-control-cart')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('add-to-cart')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
    $(this).closest('tr').remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement
    document.getElementsByClassName('product_add_to_cart_button').click(function (event) {
        if ($(event.target)[0].id = true) {
            console.log('fuck you' + $(event.target)[0].id)
        }
    })
}


function updateCartTotal() {
    var cartTable = document.getElementById('cart-table')
    var cartRows = document.getElementById('cart-rows-body')
    var total = 0
    for (var i = 1; i < (cartTable.rows.length - 3); i++) {
        var price = parseFloat(document.getElementById('cart-table').rows[i].cells.namedItem('price-cell').innerHTML.replace('$', '')).toFixed(2)
        var quantity = parseFloat(document.getElementById('cart-table').rows[i].getElementsByClassName('form-control-cart')[0].value).toFixed(2)
        total = total + (price * quantity)
    }
    document.getElementById('total-cell-cart').cells[5].innerText = '$ ' + parseFloat(total).toFixed(2);
    var shipping_cost = parseFloat(document.getElementById('shipping-cell-cart').cells[5].innerText.replace('$',''))
    document.getElementById('total-and-shipping-cost').cells[5].innerText = '$ ' + parseFloat(total + shipping_cost).toFixed(2)
    }