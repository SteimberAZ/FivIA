
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    });
}


const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
}



