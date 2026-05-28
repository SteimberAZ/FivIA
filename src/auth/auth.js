// Validación de formulario de Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            showAlert('Por favor completa todos los campos', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Por favor ingresa un correo válido', 'error');
            return;
        }
        
        if (password.length < 6) {
            showAlert('La contraseña debe tener al menos 6 caracteres', 'error');
            return;
        }
        
       
        console.log('Login:', { email, password });
        showAlert('Iniciando sesión...', 'success');
        
   
        setTimeout(() => {
            window.location.href = '../root/dashboard.html';
        }, 1500);
    });
}

// Validación de formulario de Registro
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const company = document.getElementById('company').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const terms = document.querySelector('input[name="terms"]').checked;
        
        // Validaciones
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showAlert('Por favor completa todos los campos requeridos', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Por favor ingresa un correo válido', 'error');
            return;
        }
        
        if (password.length < 8) {
            showAlert('La contraseña debe tener al menos 8 caracteres', 'error');
            return;
        }
        
        if (!isStrongPassword(password)) {
            showAlert('La contraseña debe contener letras, números y caracteres especiales', 'error');
            return;
        }
        
        if (password !== confirmPassword) {
            showAlert('Las contraseñas no coinciden', 'error');
            return;
        }
        
        if (!terms) {
            showAlert('Debes aceptar los términos y condiciones', 'error');
            return;
        }
        
       
        
        
        console.log('Register:', { 
            firstName, 
            lastName, 
            email, 
            phone, 
            company, 
            password 
        });
        
        showAlert('¡Cuenta creada exitosamente!', 'success');
        
        // Redirigir después de 2 segundos
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    });
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar contraseña fuerte
function isStrongPassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
}



function showAlert(message, type = 'info') {
    // Crear elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 1000;
        animation: slideInAlert 0.3s ease-out;
        ${type === 'error' ? 'background: #ff6b6b; color: white;' : ''}
        ${type === 'success' ? 'background: #51cf66; color: white;' : ''}
        ${type === 'info' ? 'background: #4c92ff; color: white;' : ''}
    `;
    
    document.body.appendChild(alert);
    
    // Remover alerta después de 4 segundos
    setTimeout(() => {
        alert.style.animation = 'slideOutAlert 0.3s ease-out';
        setTimeout(() => {
            alert.remove();
        }, 300);
    }, 4000);
}

// Agregar animaciones de alerta al documento
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInAlert {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutAlert {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// Prevenir envío accidental de formulario
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        const form = e.target.closest('form');
        if (form) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.click();
            }
        }
    }
});
