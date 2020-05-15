window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementsByClassName("navbar-brand")[0].style.display = "none";
    document.getElementsByClassName("navbar")[0].style.position = "fixed";
    //document.getElementsByClassName("product-background")[0].style.padding = "160px"
  } else {
    document.getElementsByClassName("navbar-brand")[0].style.display = "block";
        document.getElementsByClassName("navbar")[0].style.position = "initial";
        //document.getElementsByClassName("product-background")[0].style.padding = "0"
  }
}

$("#games").on("click",function () {
    location.href = '/product/?search_filter=game';
});

$("#consoles").on("click", function () {
    location.href = '/product/?search_filter=console';
});

$("#logout-button").on("click", function(e) {
    e.preventDefault()
    emptyCart()
    $("#logout-button").unbind('click')
    $("#logout-button")[0].click()
})
