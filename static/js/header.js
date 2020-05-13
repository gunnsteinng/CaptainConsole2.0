window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    console.log(document.documentElement.scrollTop)
    console.log(document.body.scrollTop)
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementsByClassName("navbar-brand")[0].style.display = "none";
    document.getElementsByClassName("navbar")[0].style.position = "fixed";
    document.getElementsByClassName("product-background")[0].style.padding = "160px"
  } else {
    document.getElementsByClassName("navbar-brand")[0].style.display = "block";
        document.getElementsByClassName("navbar")[0].style.position = "initial";
        document.getElementsByClassName("product-background")[0].style.padding = "0"
  }
}

document.getElementById('games').onclick = function () {
    location.href = '/product/?search_filter=game';
};

document.getElementById('consoles').onclick = function () {
    location.href = '/product/?search_filter=console';
};