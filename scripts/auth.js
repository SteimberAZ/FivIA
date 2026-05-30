// Validación de formulario de Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}

// Validación de formulario de Registro
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Redirigir después de 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
}



