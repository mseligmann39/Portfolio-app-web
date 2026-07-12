# Portfolio Personal - React + Vite (Estático & Premium)

Un portfolio de desarrollador web moderno, limpio y responsive construido con **React** y **Vite**. Está diseñado como una SPA (Single Page Application) estática sin servidor, optimizada para ofrecer un rendimiento ultra-rápido, soporte multilingüe dinámico (ES/EN) cargado localmente, y una estética visual de gama alta.

**[➡️ Ver Demo en Vivo](https://maxi.seligmann.es)**

---

## ✨ Características Principales

- **Navegación Single Page Scroll:** Toda tu información visible en una sola vista continua. La barra de navegación incluye seguimiento de sección mediante scroll (`IntersectionObserver`) que resalta automáticamente la pestaña actual.
- **Sin Base de Datos (Zero-Server Overhead):** Toda la información de tu perfil, proyectos, experiencia y habilidades está centralizada en un archivo local JSON. La web carga de inmediato (0ms) sin realizar peticiones de red iniciales ni mostrar pantallas de carga.
- **Estética Oscura Premium:** Interfaz visual cuidada con una paleta de colores basada en tonos pizarra (*slate/midnight*), acentos modernos con gradientes rojos, tipografía elegante **Outfit** (Google Fonts) y efectos translúcidos de *glassmorphism*.
- **Línea de Tiempo de Experiencia:** Sección integrada con un diseño interactivo vertical para detallar tus puestos de trabajo, estudios DAW y proyectos freelance.
- **Soporte Multilingüe Integrado (ES/EN):** Traducción instantánea de toda la interfaz y del contenido con un solo clic, sin recargar el navegador.
- **Diseño 100% Responsivo:** Totalmente adaptado para pantallas móviles, tablets y escritorios.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React (v19) + Vite (v7)
- **Estilos:** Vanilla CSS (usando CSS Modules para evitar colisiones de nombres)
- **Fuentes:** Google Fonts (Familia Outfit)

---

## 📂 Estructura del Proyecto

El proyecto está simplificado para contener únicamente el frontend estático en el directorio raíz:
```text
Portfolio-app-web/
├── index.html
├── src/
│   ├── App.jsx             # Estructura de la SPA e importación de secciones
│   ├── i18n/               # Carpetas de idiomas (es.json, en.json)
│   ├── index.css           # Estilos y variables CSS globales (temas y tipografía)
│   ├── components/         # Componentes comunes (Header, Footer)
│   ├── pages/              # Secciones principales (Home, About, Experience, Projects, Skills, Contact)
│   └── hooks/              # Funciones auxiliares personalizadas (useTypewriter)
└── package.json
```

---

## 🚀 Cómo Poner en Marcha el Proyecto Localmente

Sigue estos sencillos pasos para levantar el entorno de desarrollo local. No necesitas instalar Docker, PHP ni MySQL, ya que el proyecto es 100% estático.

### **Prerrequisitos**

* Tener instalado [Node.js](https://nodejs.org/) (versión v18 o superior recomendada).

### **Instalación y Configuración**

1. **Clona el repositorio** en tu ordenador.
2. **Instala las dependencias** directamente en la raíz:
   ```sh
   npm install
   ```

### **Ejecución y Compilación**

* **Entorno de desarrollo local**:
  ```sh
  npm run dev
  ```
  La aplicación estará disponible de inmediato en la dirección local `http://localhost:5173`.
  
* **Generar el build estático para producción**:
  ```sh
  npm run build
  ```
  Esto creará una carpeta llamada `dist/` en la raíz del proyecto que contiene el HTML, CSS y JS comprimidos. Esta carpeta está lista para ser subida de forma **100% gratuita** a plataformas como **Vercel, Netlify, GitHub Pages o Cloudflare Pages**.

---

## ✏️ Cómo Personalizar el Contenido

Para añadir proyectos, cambiar tu correo, modificar las tecnologías o actualizar el texto de "Sobre mí", solo tienes que editar los archivos de idioma dentro del directorio:
📁 [src/i18n/](file:///home/maxi/projects/Portfolio-app-web/src/i18n/)
*   `es.json`: Contenido para la versión en Español.
*   `en.json`: Contenido para la versión en Inglés.

Cada archivo contiene estructuras claras para la navegación (`nav`), información del perfil (`profile`), lista de habilidades (`skills`), proyectos (`projects`) e historial (`experience`). Las modificaciones que guardes allí se verán reflejadas instantáneamente en tu web al cambiar de idioma.
