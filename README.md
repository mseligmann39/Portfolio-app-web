# Portfolio Personal Full-Stack (Stack MERN)

Portfolio de desarrollador web full-stack creado con el stack MERN. Presenta proyectos, habilidades y perfil de forma dinámica a través de una API REST. Incluye soporte multilingüe (español e inglés) para todo el contenido.

**[➡️ Ver Demo en Vivo](https://maxi.seligmann.es)** ---

## ✨ Características Principales

* **Frontend Dinámico con React:** Interfaz de usuario moderna y reactiva construida con React y Vite.
* **Backend Robusto con Node.js y Express:** Una API RESTful gestiona todos los datos del portfolio.
* **Base de Datos NoSQL:** MongoDB (a través de Atlas) almacena toda la información de proyectos, perfil y contenido textual.
* **Contenido 100% Administrable:** Todos los textos, proyectos y habilidades se gestionan desde la base de datos.
* **Soporte Multilingüe (ES/EN):** La API sirve contenido en español o inglés según se solicite.
* **Diseño Responsive:** Adaptado para una correcta visualización en dispositivos móviles y de escritorio.

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**
* React
* Vite
* CSS3

### **Backend**
* Node.js
* Express
* Mongoose

### **Base de Datos**
* MongoDB Atlas

### **Herramientas de Desarrollo**
* ESLint
* Dotenv

---

## 🚀 Cómo Poner en Marcha el Proyecto

Sigue estos pasos para levantar el proyecto en tu entorno local.

### **Prerrequisitos**

* Tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).
* Tener una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) y un string de conexión a una base de datos.
* Tener `git` instalado.

### **Instalación**

1.  **Clona el repositorio:**
    ```sh
    git clone https://github.com/mseligmann39/Portfolio-app-web.git
    cd [NOMBRE-DE-LA-CARPETA-DEL-PROYECTO]
    ```

2.  **Instala las dependencias del Backend:**
    ```sh
    cd backend
    npm install
    ```

3.  **Instala las dependencias del Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```

### **Configuración**

1.  **Configura las variables de entorno del Backend:**
    * En la carpeta `backend`, crea un archivo llamado `.env`.
    * Añade tu string de conexión de MongoDB Atlas:
        ```
        MONGO_URI=tu_string_de_conexion_aqui
        ```

2.  **Puebla la base de datos:**
    * Conéctate a tu base de datos de MongoDB Atlas.
    * Crea las colecciones `projects`, `profiles` y `content`.
    * Inserta los documentos JSON correspondientes que hemos preparado.

### **Ejecución**

1.  **Inicia el servidor del Backend:**
    * Abre una terminal en la carpeta `backend`.
    * Ejecuta el siguiente comando:
        ```sh
        node server.js
        ```
    * El servidor estará corriendo en `http://localhost:5000`.

2.  **Inicia la aplicación del Frontend:**
    * Abre **una segunda terminal** en la carpeta `frontend`.
    * Ejecuta el siguiente comando:
        ```sh
        npm run dev
        ```
    * La aplicación estará disponible en `http://localhost:5173` (o el puerto que te indique Vite).

---

## 👤 Contacto

* **Portfolio:** [maxi.seligmann.es](https://maxi.seligmann.es)
* **LinkedIn:** https://www.linkedin.com/in/maximiliano-seligmann/
* **GitHub:** [@mseligmann39](https://github.com/mseligmann39)
