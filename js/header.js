const header = document.getElementById("header");

window.onscroll = function() { sticky() };

var sticky = navbar.offsetTop;
function sticky() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}