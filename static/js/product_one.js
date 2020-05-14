$(document).ready(function () {
    $('#button-id').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url:'/',
            type:'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<img class="offer-img" src="${ d.firstImage }" />
                            <h4 class="game-month-header">${ d.name }</h4>
                            <p class="offer_text">${ d.description }</p>
                            <p class="price">Now only $ ${ d.price }</p>
                            <div class="offer-button">
                                <button class="btn btn-lg month-game large-button" type="button">Game
                                    Info</button>
                                <button class="btn btn-lg month-game large-button add-to-cart product_add_to_cart_button" type="button" productID="${ product.id }">Buy</button>`
                });
                $('#product-one').html(newHtml.join(''));
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
})