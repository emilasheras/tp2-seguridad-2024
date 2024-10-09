### Parte A: Implementación de CI/CD y Gestión de Claves Privadas

#### 1. Configuración del Proyecto
   - [x] Crea un nuevo repositorio en GitHub para la aplicación Node.js.
   - [x] Inicializa el proyecto con un `package.json` y una estructura básica de archivos.
   - [x] Crea un directorio `.github/workflows` en el repositorio para los archivos de configuración del pipeline.

#### 2. Implementación de la Aplicación Básica
   - [ ] Desarrolla una aplicación en Node.js que realice llamadas a una API externa (por ejemplo, una API de clima).
   - [ ] Implementa pruebas unitarias básicas para la aplicación. (*era opcional?*)

#### 3. Configuración del Pipeline CI/CD Básico
   - [x] Crea un archivo `ci-cd.yml` en el directorio `.github/workflows`.
   - [x] Configura los *jobs* para compilar y realizar pruebas automáticas.

#### 4. Gestión Segura de Claves de API
   - [x] Regístrate en una API que requiera clave (puede ser OpenWeatherMap).
   - [x] Configura la clave de la API como un Secret en GitHub.
   - [ ] Modifica la aplicación y el workflow para que usen el Secret de forma segura.

#### 5. Implementación de Despliegue Seguro
   - [x] Configura el despliegue a una plataforma como Heroku o similar.
   - [ ] Implementa una simulación de rotación automática de claves mediante un script. (*era opcional?*)

#### 6. Documentación y Mejores Prácticas
   - [x] Documenta el proceso de gestión de secretos en el README.
   - [ ] Describe y documenta las mejores prácticas de seguridad.