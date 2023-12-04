# [ADDS]

## Sec [02] - Grupo N° [11]

### Integrantes

| Nombre        | Carnet        |
| ------------- | ------------- |
|Alejandro Melgar| 00026222     |
|Mario Diaz    |  00010122      |
|Gabriela Valiente| 00020322    |


Usuarios de Prueba:

AleMelgar
12345678Aa
00026222@uca.com

GabyValiente
123456789Bb
00010122@uca.edu.sv

MarioDiaz
12345678cC
12345678@uca.edu.sv



Guia de instalacion de YARN

Yarn es un gestor de paquetes para JavaScript que se utiliza comúnmente como alternativa a npm. 

Pasos para la instalación de YARN:
Antes de instalar Yarn, asegurarse de que el sistema esté actualizado. Abre una terminal y ejecuta los siguientes comandos:

sudo apt update

Yarn depende de Node.js, así que necesitas tener Node.js instalado. Este se puede instalar ejecutando los siguientes comandos:

sudo apt install nodejs


Yarn también depende de npm (Node Package Manager). Puedes instalarlo ejecutando el siguiente comando:

sudo apt install npm

Ahora, se puede instalar Yarn ejecutando los siguientes comandos:

npm install -g yarn

Este comando instalará Yarn de forma global en tu sistema.
Para asegurarte de que Yarn se haya instalado correctamente, puedes verificar la versión con el siguiente comando:

yarn --version

Deberías ver la versión de Yarn instalada en tu sistema.
Para agregar una dependencia del yarn, se debe de ejecutar este comando :

yarn add (nombre de la dependencia)

Para querer correr el proyecto trabajado con yarn se debe ejecutar el siguiente código:

yarn dev
 
En caso de que ya tenga yarn instalado, solamente tiene que correr el comando:

yarn 

Para descargar todas las dependencias instaladas en nuestro proyecto, posteriormente ejecutar:

yarn dev

Manual de Usuario - ADSS

Proceso de Registro:
Completar la Información Requerida
Proporciona un correo electrónico válido 
Selecciona un nombre de usuario único que identificará tu cuenta en la plataforma.
Elige una contraseña segura que cumpla con los requisitos de seguridad establecidos.

El usuario no puede acceder a la página web si no está registrado

Inicio de Sesión:
Después de registrarse, usted ya puede iniciar sesión
Para ello debe de ingresar su correo electrónico o nombre de usuario y la contraseña registrada.

Ver perfil de Usuario:
El usuario podrá ver su perfil, ahi aparecera, su nombre de usuario y su correo electrónico que ocupó al registrarse a la página

 Publicar Anuncio de Pupilajes:
Seleccionar "Publicar"
Completar la Información del Pupilaje
Ingresa un título descriptivo para tu pupilaje.
Proporciona una descripción detallada del pupilaje, incluyendo características y condiciones específicas.
Sube la dirección de una imagen representativa del pupilaje.
Selecciona el estado actual del pupilaje (disponible, ocupado, en mantenimiento, etc.).
Incluye un enlace de WhatsApp con tu número de celular para que los interesados se comuniquen contigo.
Indica si el pupilaje cuenta con suministro de energía,agua e internet.
Proporciona el enlace de ubicación del pupilaje.
Haz clic en el botón "Publicar" para que el anuncio del producto esté disponible en la plataforma.

Publicar el Anuncio de Productos
Seleccionar "Publicar"
Ingresa un título descriptivo para tu producto.
Proporciona una descripción detallada del producto, destacando sus características y beneficios.
Sube una imágen representativa del producto.
Selecciona el estado actual del producto (nuevo, usado, reacondicionado, etc.).
Haz clic en el botón "Publicar" para que el anuncio del producto esté disponible en la plataforma.

Ver un Anuncios:
Al hacer clic en un anuncio específico, los usuarios pueden acceder a la información detallada de este anuncio.
La información puede incluir el título, descripción, imagen, estado, y otros detalles proporcionados por el anunciante,ademas ahi se podra encontrar el link de Whatsapp para que el usuario se comunique con el anunciante

Documentación del Proyecto (Backend)

Introducción
Este documento proporciona una visión general del proyecto backend, incluyendo su estructura, dependencias clave, y cómo se relacionan los distintos componentes.

Estructura del Proyecto

El proyecto sigue una estructura común de aplicaciones yarn.

bin: Contiene scripts de arranque, como www para iniciar el servidor.
config: Configuraciones del proyecto, incluyendo la configuración de la base de datos.
controllers: Lógica del controlador para manejar las solicitudes HTTP.
middlewares: Funciones middleware, como autenticación y autorización.
models: Definiciones de modelos de base de datos utilizando Mongoose.
public: Archivos estáticos, como imágenes, que se sirven de forma estática.
routes: Definiciones de rutas y controladores asociados.
utils: Utilidades y herramientas generales.
validators: Validaciones para las solicitudes HTTP.

Dependencias Principales

Express: Marco de aplicación web utilizado para construir la aplicación.
Mongoose: ODM para interactuar con MongoDB.
Express Validator: Middleware para validación de datos en las solicitudes HTTP.
Debug: Utilidad de depuración para imprimir mensajes de depuración.
Dotenv: Carga variables de entorno desde un archivo .env.
Nodemon: Herramienta de desarrollo que reinicia automáticamente la aplicación ante cambios.

Configuración

La configuración del proyecto se gestiona a través de variables de entorno definidas en un archivo .env. Un ejemplo de archivo .env se proporciona en el repositorio.

.env:
DEBUG=app:*
PORT=3501
DBURI="mongodb+srv://admin:q5bIJ2prSDVYI3NF@cluster0.6tb4p9d.mongodb.net/pw?retryWrites=true&w=majority"
TOKEN_SECRET=XBqQ3lj0JNyFOMKk9qXHN1mTn8ozwS9xconst
CORS_ORIGIN=http://localhost:5173


Scripts YARN
yarn install: Inicia la aplicación en un entorno de producción.

yarn dev: Inicia la aplicación en modo de desarrollo.

La API se organiza en varios endpoints, cada uno manejando un conjunto específico de funcionalidades. Algunos de los endpoints principales incluyen:

/api/auth: Maneja la autenticación de usuarios.
/api/post: Endpoints relacionados con publicaciones y pupilajes.
/api/product: Endpoints relacionados con productos.

Consulta la documentación específica de cada endpoint para obtener detalles sobre cómo utilizarlos.

Conclusiones
Esta documentación proporciona una visión general del proyecto backend. Se recomienda revisar el código fuente y la documentación específica de cada módulo para obtener detalles más específicos








