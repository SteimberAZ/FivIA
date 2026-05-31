# FivIA

## Descripción general

FivIA es una interfaz web de demostración para una plataforma de creación y gestión de ChatBots inteligentes. El proyecto incluye pantallas de inicio de sesión, registro y un panel tipo dashboard donde se muestran plantillas y opciones de uso.

Está construido como un sitio estático con HTML, CSS y JavaScript moderno. No incluye un backend real: la navegación entre páginas se simula desde el cliente.

---

## Estructura principal del proyecto

- `index.html`
  - Página de inicio de sesión.
  - Contiene el formulario de email y contraseña con enlace a registro.
  - Usa `css/auth.css` para estilos y `scripts/auth.js` para la simulación del login.

- `registro.html`
  - Página de registro de nuevos usuarios.
  - Incluye campos de nombre, apellido, email, contraseña y confirmación.
  - También usa `css/auth.css` y `scripts/auth.js` para manejar el envío del formulario.

- `dashboard.html`
  - Página principal de usuario tras iniciar sesión.
  - Muestra un menú lateral, enlaces de navegación y secciones de plantillas de ChatBots.
  - Incluye el efecto de texto animado con `Typed.js`.

- `css/auth.css`
  - Estilos para las páginas de autenticación (`index.html` y `registro.html`).
  - Define diseño de formulario, tarjetas, animaciones y responsividad básica.

- `css/styles.css`
  - Estilos para el dashboard principal.
  - Controla el aspecto del header, el menú lateral, artículos de plantillas y footer.

- `scripts/auth.js`
  - Controla la interacción de los formularios de login y registro.
  - Evita el envío real y redirige a `dashboard.html` o `index.html` tras una pausa simulada.

- `scripts/script.js`
  - Controla la selección activa del menú en el dashboard.
  - Inicia el texto animado de bienvenida con `Typed.js`.
  - Permite ocultar/mostrar el menú lateral al hacer clic en la flecha en dispositivos moviles.

- `assets/`
  - Carpeta de recursos del proyecto, como iconos e imágenes.

---

## Funcionalidad importante

### Autenticación simulada

- El proyecto no valida credenciales reales.
- `scripts/auth.js` intercepta el `submit` de los formularios y, tras un pequeño retraso, redirige a la página correspondiente.
- Esto permite mostrar la experiencia de flujo de login/registro sin servidor.

### Navegación del dashboard

- En `dashboard.html`, el menú lateral está compuesto por enlaces `<a>` con clase `menu`.
- `scripts/script.js` agrega la clase `dash-hover` al elemento seleccionado, para resaltar la opción activa.
- La flecha junto al menú interactúa con el estilo `display` para ocultar o mostrar el panel.

### Animaciones y experiencia

- `Typed.js` se usa para mostrar frases dinámicas en la bienvenida del dashboard.
- Los botones y tarjetas tienen transiciones suaves.
- El diseño utiliza variables CSS para mantener colores consistentes y mejorar la apariencia.

---

## Uso del proyecto

1. Abrir `index.html` en un navegador.
2. Ingresar cualquier correo y contraseña para simular inicio de sesión.
3. Serás redirigido a `dashboard.html`.
4. En `registro.html`, completar el formulario para simular creación de cuenta.
5. El proyecto funciona localmente como una demo estática.

---

## Notas adicionales

- El proyecto está orientado a una demo académica o de prototipo.
- Para hacerlo funcional con datos reales necesitaría integrar un backend y almacenamiento de usuarios.
- Las principales páginas están separadas en `auth` y `dashboard` para mantener claridad en el flujo UX.

---

## Autor

- Proyecto basado en una interfaz llamada `FivIA`.
- Contacto y enlaces disponibles en el footer del `dashboard.html`.
