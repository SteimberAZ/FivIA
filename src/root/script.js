const items = document.querySelectorAll(".menu");
items[0].classList.add("dash-hover");
items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => {
            i.classList.remove("dash-hover");
        });
        item.classList.add("dash-hover");
    });
});

const typed = new Typed('#typed', {
    strings: [
    " Crea chatbots inteligentes",
    " Automatiza tareas",
    " Gestiona conversaciones",
    " Potencia tu negocio"
    ],
    typeSpeed: 40,
    backSpeed: 30, 
    backDelay: 1500, 
    loop: true 
});

const arrow = document.getElementById("arrow");
const menu = document.getElementById("menul");
arrow.addEventListener("click", () => {
    if(menu.style.display === "flex"){
        menu.style.display = "none";
        arrow.style.transform = "rotate(360deg)";
    } else {
        menu.style.display = "flex";
        arrow.style.transform = "rotate(180deg)";
    }
});
