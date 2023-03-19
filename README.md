## APP - HERRAMIENTAS DE PROGRAMACIÓN MÓVIL - Tarea 8

- App desarrollada para el ramo HERRAMIENTAS DE PROGRAMACIÓN MÓVIL - Tarea 8, que permite mostrar un listado de repuestos, con su nombre, imagen y precio, tambien una lógica que muestra una notificación push cada 15 segundos.


# Instalaciones necesarias

1. Instalar NODE js: https://nodejs.org/es/
2. Instalar GIT: https://git-scm.com/
3. Instalar Typescript: https://www.typescriptlang.org/
4. Instalar Angular CLI: https://cli.angular.io/
5. Instalar Ionic CLI: `npm install -g @ionic/cli` | https://ionicframework.com/docs/cli

# Levantar proyecto

1. Clona el repositorio `git clone https://github.com/fbellod1986/franco-bello-apk-repuestos.git`
2. Dentro del proyecto clonado ejecuta `npm i` para instalar todas las dependencias necesarias que necesita la aplicación para levantarse.
3. Ejecutar comando `ionic cap add android`, este comando se encarga de agregar la carpeta android.
4. Ejecutar comando `ionic cap copy`, este comando se encarga de copiar todos los cambios a la carpeta android.
5. Ejecutar comando `ionic cap build`, seleccionar `android`, este comando se encarga de generar los componentes y levantar el android studio para correr la app.
3. Finalmente ejecuta `ionic serve --o` en la consola y se abrira una pestaña en el navegador `http://localhost:8100`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.