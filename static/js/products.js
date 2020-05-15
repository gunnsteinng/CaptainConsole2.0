$(document).ready(function () {

    //Get search box input and display

        $('#search-btn').on('click', function (e) {
            e.preventDefault();
            var searchText = $('#search-box').val();
            $.ajax({
                url: '/product/?search_filter=' + searchText,
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
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
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

    //Function for all filter buttons and sort buttons

    var filterProductButtons = document.getElementsByClassName('btn-filter')
    for (var i = 0; i < filterProductButtons.length; i++) {
        var button = filterProductButtons[i]
        button.addEventListener('click', function () {

            //get id of button clicked
            var the_id_i_need = this.id

            //get value of button clicked
            var the_value_i_need = document.getElementById(the_id_i_need).value

            if (the_value_i_need == 'See All') {
                the_value_i_need = ''
            }

            //possible search parameters
            var our_product_and_category = ['', 'Atari', 'Nintendo', 'Playstation', 'SEGA', 'game', 'console']

            //possible sort parameters
            var our_sort = ['price', 'name']

            //Special offer button
            if (the_value_i_need == 'CLICK HERE') {
                $.ajax({
                    url: '/product/?special_offer=True',
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
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
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


                // Filter buttons
            } else if (our_product_and_category.includes(the_value_i_need)) {
                $.ajax({
                    url: '/product/?search_filter=' + the_value_i_need,
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
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
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

                //Sort buttons
            } else if (our_sort.includes(the_value_i_need)) {
                $.ajax({
                    url: '/product/?order_by=' + the_value_i_need,
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
                                        <div class="product-button-div product-info-button">
                                            <a href="/product/${d.id}" type="button" 
                                                class="btn btn-sm btn-outline-secondary
                                                product-button">Info</a>
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

            }
        })
    }