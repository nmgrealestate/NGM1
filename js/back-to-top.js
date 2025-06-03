let mybutton = document.getElementById("bkToTopButton");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollHome(val) {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    window.location.href = '#' + val;
}
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // mybutton.style.display = "block";
        // mybutton.style.transition = "0.4s";
        mybutton.classList.add("show-backtotop");
        mybutton.classList.remove("hide-backtotop");
    } else {
        // mybutton.style.display = "none";
        // mybutton.style.transition = "0.4s";
        mybutton.classList.add("hide-backtotop");
        mybutton.classList.remove("show-backtotop");
    }

}