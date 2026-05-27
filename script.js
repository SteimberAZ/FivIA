const dash = document.getElementById("dash");

let dashActive= true;

dash.classList.toggle('dash-hover', dashActive);

const uwu= document.getElementById("uwu");
uwu.addEventListener("click", function() {
    dashActive = !dashActive
    dash.classList.toggle('dash-hover', dashActive);
});
