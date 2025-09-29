# Portfolio Personal Full-Stack (React + PHP)

Portfolio de desarrollador web full-stack creado con React para el frontend y una API REST en PHP con MySQL para el backend. Presenta proyectos, habilidades y perfil de forma dinámica y multilingüe.

**[➡️ Ver Demo en Vivo](https://maxi.seligmann.es)**

## ✨ Características Principales

- **Frontend Dinámico con React:** Interfaz de usuario moderna y reactiva construida con React y Vite.
- **Backend Robusto con PHP:** Una API RESTful en PHP gestiona todos los datos del portfolio.
- **Base de Datos Relacional:** MySQL (en Hostinger) almacena toda la información de proyectos, perfil y contenido.
- **Contenido 100% Administrable:** Todos los textos y proyectos se gestionan desde la base de datos.
- **Soporte Multilingüe (ES/EN):** La API sirve contenido en español o inglés según se solicite.
- **Diseño Responsive:** Adaptado para dispositivos móviles y de escritorio.

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**

- React
- Vite
- CSS3

### **Backend**

- PHP
- MySQL (con PDO)

### **Base de Datos**

- MySQL

---

## 🚀 Cómo Poner en Marcha el Proyecto

Sigue estos pasos para levantar el proyecto en tu entorno local.

### **Prerrequisitos**

- Tener instalado [Node.js](https://nodejs.org/) y npm.
- Tener un servidor local como XAMPP o un entorno LAMP en Linux (PHP y MySQL).
- Tener `git` instalado.

### **Instalación**

1.  **Clona el repositorio.**
2.  **Configura el Backend:**
    - Crea una base de datos MySQL.
    - Importa el archivo `.sql` para crear la estructura y poblar los datos.
    - En la carpeta `backend`, renombra `config.example.php` a `config.php` y rellena tus credenciales de la base de datos.
3.  **Instala las dependencias del Frontend:**
    ```sh
    cd frontend
    npm install
    ```

### **Ejecución**

1.  **Asegúrate de que tu servidor web (Apache/MySQL) esté corriendo.**
2.  **Inicia la aplicación del Frontend:**
    - Abre una terminal en la carpeta `frontend`.
    - Ejecuta `npm run dev`.
    - La aplicación estará disponible en `http://localhost:5173`.

---

## 👤 Contacto

- **Portfolio:** [maxi.seligmann.es](https://maxi.seligmann.es)
- **LinkedIn:** https://www.linkedin.com/in/maximiliano-seligmann/
- **GitHub:** [@mseligmann39](https://github.com/mseligmann39)
