const items = document.querySelectorAll(".menu");
items[0].classList.add("dash-hover");

items.forEach(item => {
    item.addEventListener("click", () => {
        items.forEach(i => {
            i.classList.remove("dash-hover");
        });
        item.classList.add("dash-hover");
        if(item.id === "dash"){
            document.getElementById("dashboard").style.display = "block";
            document.getElementById("gestionar").style.display = "none";
            document.getElementById("crear").style.display = "none";
            document.getElementById("config").style.display = "none";
        } 
        else if(item.id === "ges"){
            document.getElementById("dashboard").style.display = "none";
            document.getElementById("gestionar").style.display = "block";
            document.getElementById("crear").style.display = "none";
            document.getElementById("config").style.display = "none";
        }
        else if(item.id === "cre"){
            document.getElementById("dashboard").style.display = "none";
            document.getElementById("gestionar").style.display = "none";
            document.getElementById("crear").style.display = "block";
            document.getElementById("config").style.display = "none";
        }
        else if(item.id === "conf"){
            document.getElementById("dashboard").style.display = "none";
            document.getElementById("gestionar").style.display = "none";
            document.getElementById("crear").style.display = "none";
            document.getElementById("config").style.display = "block";
        }
        else {
            document.getElementById("dashboard").style.display = "none";
            document.getElementById("gestionar").style.display = "none";
            document.getElementById("crear").style.display = "none";
            document.getElementById("config").style.display = "none";
        }
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
const typed2 = new Typed('#typed2', {
    strings: [
  "Gestiona tus chatbots fácilmente",
  "Organiza todos tus bots en un solo lugar",
  "Supervisa el rendimiento de tus bots"],
    
    typeSpeed: 40,
    backSpeed: 30, 
    backDelay: 1500, 
    loop: true 
});
const typed3 = new Typed('#typed3', {
    strings: [
  "Define tu asistente",
  "Personaliza el diálogo",
  "Publica tu chatbot en minutos"],
    
    typeSpeed: 40,
    backSpeed: 30, 
    backDelay: 1500, 
    loop: true 
});
const createBotForm = document.getElementById('createBotForm');
const createFeedback = document.getElementById('createFeedback');
if (createBotForm) {
    createBotForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('botName').value.trim();
        if (!name) {
            createFeedback.textContent = 'Por favor, introduce el nombre de tu ChatBot.';
            return;
        }
        createFeedback.textContent = `ChatBot "${name}" creado correctamente.`;
        createBotForm.reset();
    });
}
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeStatus = document.getElementById('darkModeStatus');
const setDarkMode = (enabled) => {
    document.body.classList.toggle('dark-mode', enabled);
    if (darkModeToggle) {
        darkModeToggle.textContent = enabled ? 'Desactivar modo oscuro' : 'Activar modo oscuro';
    }
    if (darkModeStatus) {
        darkModeStatus.textContent = enabled ? 'Modo oscuro activado' : 'Modo claro activado';
    }
};

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
setDarkMode(prefersDarkScheme.matches);
if (prefersDarkScheme.addEventListener) {
    prefersDarkScheme.addEventListener('change', (event) => {
        setDarkMode(event.matches);
    });
} else if (prefersDarkScheme.addListener) {
    prefersDarkScheme.addListener((event) => {
        setDarkMode(event.matches);
    });
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const darkEnabled = !document.body.classList.contains('dark-mode');
        setDarkMode(darkEnabled);
    });
}
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



