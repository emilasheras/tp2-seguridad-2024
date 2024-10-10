# TP2 - Seguridad 2024

## 📋 Descripción
Este proyecto es parte del Trabajo Práctico 2 de Seguridad Informática y tiene como objetivo aplicar buenas prácticas de integración y despliegue continuo (CI/CD) junto con la gestión segura de claves. Se implementa una aplicación básica Node.js que sirve páginas HTML, CSS, y JavaScript estáticos, integrada con GitHub Actions para CI/CD y desplegada en Render.

## 🛠️ Tecnologías Utilizadas
- Node.js + Express
- GitHub Actions para CI/CD
- Render.com para hosting
- dotenv para la gestión de variables de entorno

## 📋 Requisitos Previos
- **Node.js** (v20.x recomendado) y **npm** instalados.
- Cuenta en **GitHub** y **Render.com**.
- Clave API de **Render** guardada como un Secret en GitHub.

## 🖥️ Instalación Local
Para ejecutar este proyecto en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/emilasheras/tp2-seguridad-2024.git
   cd tp2-seguridad-2024
   ```

2. Instala las dependencias del proyecto:
   ```bash
   npm install
   ```

3. Crea un archivo `.env` en el directorio principal con el siguiente contenido:
   ```
   APP_PORT=3000
   ```

4. Ejecuta el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
   O en modo producción:
   ```bash
   npm start
   ```

5. Accede a la aplicación en tu navegador en `http://localhost:3000`.

## 🚀 Despliegue en Render
Para desplegar la aplicación en Render, el proceso se realiza automáticamente mediante GitHub Actions cada vez que se hace un push a la rama `main`. A continuación se describen los pasos principales:

1. **Vinculación del Repositorio con Render**:
   - Crear un nuevo servicio en Render y vincular el repositorio `tp2-seguridad-2024`.
   - Desactivar el despliegue automático, ya que el despliegue lo gestiona GitHub Actions.

2. **Configuración de GitHub Actions**:
   - Se ha configurado un flujo de trabajo (`.github/workflows/ci-cd.yml`) que define los pasos para compilar, probar y desplegar la aplicación.
   - El Secret `RENDER_API_KEY` se usa para autenticar la solicitud de despliegue en Render.

## 🗂️ Estructura del Proyecto
```
TP2-Seguridad-2024/
├── public/
│   ├── Imagenes/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── otros_assets...
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── app.js
├── package.json
├── .env.example
```

- **public/**: Contiene los archivos estáticos (HTML, CSS, JS).
- **.github/workflows/**: Contiene el archivo `ci-cd.yml` con la configuración del pipeline CI/CD.
- **app.js**: Servidor Node.js que sirve los recursos estáticos.
- **package.json**: Detalles del proyecto y scripts.
- **.env.example**: Archivo de ejemplo para variables de entorno.

## 📝 Scripts del Proyecto
- **`npm run dev`**: Inicia la aplicación con `nodemon` para desarrollo.
- **`npm start`**: Inicia la aplicación en modo producción.
- **`npm run build`**: No es necesario para este proyecto, pero existe como placeholder.

## 🔐 CI/CD y Seguridad
- Se utiliza **GitHub Actions** para la integración y despliegue continuo.
- Los Secrets se gestionan de manera segura utilizando **GitHub Secrets** (ej. `RENDER_API_KEY` para desplegar en Render).

## 📚 Recursos Utilizados
- [Fireship - Canal de YouTube](https://www.youtube.com/c/Fireship)
  - [WebSockets in 100 Seconds & Beyond with Socket.io](https://www.youtube.com/watch?v=1BfCnjr_Vjg)
  - [Learn Docker in 7 Easy Steps - Full Beginner's Tutorial](https://www.youtube.com/watch?v=gAkwW2tuIqE)
- [Documentación oficial de Render](https://render.com/docs)
- [GitHub Actions Official Docs](https://docs.github.com/en/actions)

## 📌 Notas Adicionales
- Desactivar el auto-deploy en Render para evitar doble despliegue cuando GitHub Actions realiza el despliegue.
- Puedes ver el estado del pipeline CI/CD en la pestaña **Actions** del repositorio en GitHub.

## ✒️ Grupo
- **Sebastián Cejas**
- **Magalí Cobos**
- **Florencia Cobos**
- **Emiliano Las Heras**
- **Miguel Alvarez**