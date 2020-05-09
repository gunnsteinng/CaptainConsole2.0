$(document).ready(function () {
    $('#search-btn').on('click', function (e) {
        e.preventDefault();
        var searchText = $('#search-box').val();
        $.ajax({
            url:'/product/?search_filter=' + searchText,
            type: 'GET',
            success: function (resp) {
                var newHtml = resp.data.map(d => {
                    return `<section class="product_section" id="product">
                                <div class="card mb-4 shadow-sm">
                                    <img src="${d.firstImage}" class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">${d.name}</text></>
                                <div class="card-body">
                                    <p class="d-inline-block text-truncate" style="max-width: 300px;">${d.description}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <a href="/product/${d.id}" type="button" class="btn btn-sm btn-outline-secondary">View</a>
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                        </div>
                                        <small class="text-muted">TODO Vantar Verð</small>
                                    </div>
                                </div>
                                </div>
                                </section>`
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