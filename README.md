##Proyecto EMOTIVA

##Tabla de Contenido

1.  Introducción 
2.  Tecnologías utilizadas en el proyecto
3.  Instalación
4.  Colaboración

##Introducción

El  presente documento describe la guía para contribuir al proyecto "EMOTIVA", un software que busca desarrollar una plataforma simple y sencilla que permite a los usuarios que usarán esta plataforma ingresar, listar, modificar, eliminar noticias y visualizarlas en la página principal. Este proyecto surge a raíz de mezclar dos cosas: El desarrollo de aplicaciones y el mundo del entretenimiento. Se han hecho planeaciones, modelados de bases de datos y un poco de arquitectura de software en conceptos básicos de principios SOLID para refactorización y reutilización de código. Sin embargo, esta es la primera versión de EMOTIVA y muy posiblemente cuando se ejecute el proyecto pueden haber inconsistencias, por ello es la razón principal para que el desarrollador pueda aportar de manera desinteresada en este proyecto, por ende cualquier ayuda es bien recibida. 


#Tecnologías utilizadas en el proyecto

##Backend: NodeJS, Express
Este proyecto utiliza la tecnología Node Js y Express para construir y ejecutar código backend, y Postman para el consumo del servicio API. 

##Frontend
En materia  de frontend se utiliza HTML5, CSS y JavaScript para la creación del sitio web. Se ha optado por esta tecnología debido a que ReactJS es un framework que es uno de los más conocidos y populares hoy por hoy y ofrece mayor adaptabilidad y practicidad a la hora de codificar sin muchas complicaciones.

##Bases de Datos
En materia de bases de datos se utilizan dos plataformas: SQL para bases de datos relacionales y Mongo DB para bases de datos no relacionales. 


#Instalación

##Backend

Para poder trabajar con este repositorio debes tener:
- [NodeJS](https://nodejs.org/es/) instalado en tu ordenador
- Un editor de texto (Visual Studio Code) 
- Tener instalado Microsoft SQL Server Management Studio para Windows 
- Tener instalado MongoDB Compass para gestionar las  bases de datos no relacionales ya que las noticias están almacenadas allí. 
- Tener instalado Postman para las pruebas de ejecución y consumo de servicios API. 

Una vez que tengas todos los paquetes básicos para trabajar, procedes a bajar  o clonar este repositorio en tu ordenador a través del comando

$ git clone https://example.com: Asegurate que el proyecto quede almacenado en una carpeta creada en Disco Local C:
$ cd ../path/to/the/file: La ruta en donde vas a alojar el proyecto
Abrir Visual Studio Code y arrastra la carpeta del proyecto a la ventana principal.

Una vez que se ha abierto el proyecto, debes ubicarte en la carpeta miBackend, de la siguiente forma:

$ cd miBackend

Una vez ubicada la carpeta, debes instalar el paquete principal $ npm install para descargar los paquetes en la carpeta node_modules y posteriormente las siguientes dependencias:

- bcrypt
- body-parser
- cors
- ejs
- express
- express-validator
- fs
- http-errors
- jsonwebtoken
- mongodb
- mssql
- multer
- tedious
- validator

La estructura para la instalación de los paquetes para este proyecto es la siguiente:
$npm install  nombre_del_paquete --save

Aspectos a considerar para correr  el proyecto en el backend:
1. Para conectar este proyecto con MongoDB, debes hacer lo siguiente: 
1.1. Verificar la IP Pública de tu ordenador  
1.2. Copiar esa dirección IP y pegarla en la plataforma MongoDB Atlas 
1.3. Cuando ingreses a Mongo Atlas, en la parte izquierda encontrarás la sección Security y dentro de allí, seleccionas la opción Network Access
1.4. Una vez estes allí, aparece la opción de Agregar Dirección IP, dar clic y te genera un formulario en el cual ingresarás la IP en (Access List Entry) y el usuario en (Comment)

##Credenciales de Acceso

En Mongo DB Compass:
1. Crear una nueva conexión y allí en el campo URI pegarás la siguiente cadena de conexión:
mongodb+srv://NombreUsuario:ContraseñaUsuario@cluster0.nv6cxy7.mongodb.net/

NOTA: El Nombre de Usuario y la Contraseña se deben crear en la cadena de conexión ya proporcionada.

Una vez conectada la base de datos de Mongo, debemos ir a la carpeta miBackend y dentro de ella, hay una subcarpeta llamada database y allí hay un archivo llamado configmongo.json en el cual encontrarás la cadena de conexión:

  "connectionString": "mongodb+srv://NombreUsuario:ContraseñaUsuario@cluster0.nv6cxy7.mongodb.net/"

Allí debes cambiar el usuario y la contraseña creada en Mongo.

Una vez cumplidos estos requisitos, se procede a ejecutar el código backend a través del siguiente comando:

$npm run start

Si el servidor de backend funciona, procederás a consumir en Postman los endpoints  que ofrece dicho servicio. A través de la siguiente estructura en general, por ejemplo:
http://localhost:3000/users/listaUsuarios: El puerto que se conecta al servidor puede cambiar de acuerdo a la configuración de puertos de tu ordenador.


##Frontend

Para trabajar  en el frontend es necesario tener conocimientos de React y Javascript (para instalación de librerías y consumo de servicios) y posteriormente de HTML, CSS y Bootstrap (para el diseño de la página)

Abres en Visual Studio Code una nueva terminal y posteriormente debes ubicarte en la carpeta miFrontend, de la siguiente forma:

$ cd miFrontend

y posteriormente te ubicas en la carpeta emotiva-project:

$ cd emotiva-project

Una vez ubicada la carpeta, debes instalar el paquete principal $ npm install para descargar los paquetes en la carpeta node_modules y posteriormente las siguientes dependencias:

    "@fortawesome/free-brands-svg-icons": "^6.4.2",
    "@fortawesome/free-solid-svg-icons": "^6.4.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@tinymce/tinymce-react": "^4.3.2",
    "bootstrap": "^5.3.1",
    "draft-js": "^0.11.7",
    "firebase": "^10.5.2",
    "global": "^4.4.0",
    "hero-slider": "^3.2.0",
    "js-cookie": "^3.0.5",
    "moment": "^2.30.1",
    "moment-with-locales-es6": "^1.0.1",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.1",
    "react-dom": "^18.2.0",
    "react-draft-wysiwyg": "^1.15.0",
    "react-modal": "^3.16.1",
    "react-quill": "^2.0.0",
    "react-redux": "^8.1.2",
    "react-router-dom": "^6.15.0",
    "react-slick": "^0.29.0",
    "react-spotify-player": "^1.0.4",
    "react-sweetalert2": "^0.6.0",
    "redux": "^4.2.1",
    "redux-thunk": "^2.4.2",
    "tinymce": "^6.8.2"

Las versiones de las dependencias pueden variar de acuerdo a las actualizaciones más recientes de los paquetes.

La estructura para la instalación de los paquetes o dependencias es la siguiente:
$npm install  nombre_del_paquete --save

NOTA: En caso que en tu ordenador al ejecutar el proyecto en el frontend, encuentras un problema con la librería "moment" o "moment-with-locales-es6"... podrías buscar otra alternativa con otra librería para el manejo de la fecha y la hora con el objetivo de que la página funcione correctamente.

Una vez cumplidos estos requisitos, se procede a ejecutar el código backend a través del siguiente comando:

$npm run START


Archivos a tener en cuenta:

##Backend: 
- utils.js: Está en la carpeta "common" dentro de la carpeta "miBackend"
- index.js: Para levantar el servidor
- configsql.json y db_sql.js: Para  las conexiones a la base de datos SQL
- configmongo.json y db_mongo.js: Para las conexiones a la base de datos Mongo
Las carpetas que comienzan con la palabra "upload" son carpetas para almacenar imágenes y/o archivos que se van subiendo a la plataforma.
En la carpeta routes están los archivos que te llevan a las funciones  correspondientes para realizar peticiones GET, POST, PUT y DELETE al servidor.

##Frontend
- utils.js: Está en la carpeta "common" dentro de la carpeta "miFrontend"