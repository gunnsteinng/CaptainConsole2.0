$(document).ready(function () {
    $('#btn_id').on('click', function (e) {
        e.preventDefault();
        $.ajax({
            url:'/',
            type:'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<img class="game-of-month-img" src="${ d.firstImage }" />
                                <p class="offer_text">${ d.description }</p>
                                <div class="game-of-month-button">
                                    <button class="btn btn-lg month-game large-button"
                                            type="button">Game Info</button>
                                    <button class="btn btn-lg month-game large-button add-to-cart 
                                    product_add_to_cart_button" type="button" 
                                            productID="${ product.id }" type="button">Buy</button>`
                });
                $('#section-one').html(newHtml.join(''));
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
})