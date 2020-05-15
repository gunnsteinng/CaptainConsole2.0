$(document).ready(function () {
    $('#search-btn').on('click', function (e) {
        e.preventDefault();
        var searchText = $('#search-box').val();
        $.ajax({
            url:'/product/?search_filter=' + searchText,
            type: 'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {

                    return `<div class="col-md-4">
                                <section class="product_section" id="product">
                                <div class="card single-product">
                                    <img src="${d.firstImage}" 
                                    class="bd-placeholder-img card-img-top product-card-img" 
                                    width="225" height="225" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    preserveAspectRatio="xMidYMid slice" focusable="false" 
                                    role="img" aria-label="Placeholder: Thumbnail" />
                                <h5 class="product-card-name">${d.name}</h5>
                                <div class="card-body">
                                    <p class="text-truncate align-items-center">${d.description}</p>
                                    <p>$ ${d.price}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
                                        </div>
                                        <div class="product-button-div product-buy-button">
                                            <button type="button" class="btn btn-sm
                                            btn-outline-secondary product-button">Buy</button>
                                        </div>
                                    </div>
                                </div>
                             </div>
                            </section>
                            </div>`
                });
                $('#product_filter_stuff').html(newHtml.join(''));
                $('#search-box').val('');
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    });
});

$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        var the_manufac = $(this).val()
        $.ajax({
            url:'/product/?search_filter=' + the_manufac,
            type: 'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<div class="col-md-4">
                                <section class="product_section" id="product">
                                <div class="card single-product">
                                    <img src="${d.firstImage}" 
                                    class="bd-placeholder-img card-img-top product-card-img" 
                                    width="225" height="225" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    preserveAspectRatio="xMidYMid slice" focusable="false" 
                                    role="img" aria-label="Placeholder: Thumbnail" />
                                <h5 class="product-card-name">${d.name}</h5>
                                <div class="card-body">
                                    <p class="text-truncate align-items-center">${d.description}</p>
                                    <p>$ ${d.price}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
                                        </div>
                                        <div class="product-button-div product-buy-button">
                                            <button type="button" class="btn btn-sm
                                            btn-outline-secondary product-button">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </section>
                            </div>`
                });
                $('#product_filter_stuff').html(newHtml.join(''));
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    })
})

$(document).ready(function () {
    $('input[type="button"]').click(function () {
        var the_order = $(this).val()
        $.ajax({
            url:'/product/?order_by=' + the_order,
            type: 'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<div class="col-md-4">
                                <section class="product_section" id="product">
                                <div class="card single-product">
                                    <img src="${d.firstImage}" 
                                    class="bd-placeholder-img card-img-top product-card-img" 
                                    width="225" height="225" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    preserveAspectRatio="xMidYMid slice" focusable="false" 
                                    role="img" aria-label="Placeholder: Thumbnail" />
                                <h5 class="product-card-name">${d.name}</h5>
                                <div class="card-body">
                                    <p class="text-truncate align-items-center">${d.description}</p>
                                    <p>$ ${d.price}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
                                        </div>
                                        <div class="product-button-div product-buy-button">
                                            <button type="button" class="btn btn-sm
                                            btn-outline-secondary product-button">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </section>
                            </div>`
                });
                $('#product_filter_stuff').html(newHtml.join(''));
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    })
})


$(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
        var special_price = $(this).val()
        $.ajax({
            url:'/product/?special_offer=' + special_price,
            type: 'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<div class="col-md-4">
                                <section class="product_section" id="product">
                                <div class="card single-product">
                                    <img src="${d.firstImage}" 
                                    class="bd-placeholder-img card-img-top product-card-img" 
                                    width="225" height="225" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    preserveAspectRatio="xMidYMid slice" focusable="false" 
                                    role="img" aria-label="Placeholder: Thumbnail" />
                                <h5 class="product-card-name">${d.name}</h5>
                                <div class="card-body">
                                    <p class="text-truncate align-items-center">${d.description}</p>
                                    <p>$ ${d.price}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
                                        </div>
                                        <div class="product-button-div product-buy-button">
                                            <button type="button" class="btn btn-sm
                                            btn-outline-secondary product-button">Buy</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </section>
                            </div>`
                });
                $('#product_filter_stuff').html(newHtml.join(''));
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        })
    })
})