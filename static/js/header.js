
//minimize navbar on scroll
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
    document.getElementsByClassName("navbar-brand")[0].style.display = "none";
    document.getElementsByClassName("navbar")[0].style.position = "fixed";
    document.getElementsByClassName("main-display")[0].style.paddingTop = "170px"
  } else {
    document.getElementsByClassName("navbar-brand")[0].style.display = "block";
    document.getElementsByClassName("navbar")[0].style.position = "initial";
    document.getElementsByClassName("main-display")[0].style.padding = "0"
  }
}


$("#logout-button").on("click", function(e) {
    e.preventDefault()
    emptyCart()
    $("#logout-button").unbind('click')
    $("#logout-button")[0].click()
})
