# Sistema de gestión de tareas

## Descripción

El sistema cuenta con tres módulos para la gestión de usuarios, tareas y autenticación al sistema.

### Tecnologias utilizadas
* NodeJS
* NestJS
* MongoDB
* Mikro-ORM
* Passport(JWT)

*************************************************************

## Servicio de autenticación(auth)
Este módulo es el encargado de administrar la autenticación al sistema por medio de tokens(JWT), estos son firmados por el servidor con una secret-key la cual se encuentra como variable de entorno(.env) además de asignarle un tiempo de vida al token. Posteriormente, se solicitará el token en los endpoints que estén protegidos.

### URL del servicio:
```
    local : http://127.0.0.1:8080/auth
```
### Metodos HTTP disponibles:

```
  * auth(login) - POST
```

********************************************************

## Servicio gestion de usuarios(users)
Este módulo es el encargado de administrar la información de cada uno de los usuarios que ingresan al sistema, en este se gestiona el CRUD de los usuarios.  

### URL del servicio:
```
  local : http://127.0.0.1:8080/users
```
### Metodos HTTP disponibles:

```
   * Obtener todos los usuarios - GET
   * Obtener usuario por ID - GET
   * Crear nuevo usuario - POST
   * Actualizar usuario - PUT
   * Eliminar usuario - DELETE
```
************************************************************

## Servicio gestion de tareas
Este módulo es el encargado de administrar las tareas de los usuarios, este modulo permite crear las tareas en base al usuario que ha iniciado sesión con el JWT.

### URL del servicio:
```
    local : http://127.0.0.1:8080/tasks

```
### Metodos HTTP disponibles:

```
   * Obtener todas las tareas - GET
   * Obtener una tarea por id - GET
   * Crear una nueva tarea - POST
   * Actualizar una tarea - PUT
   * Eliminar una tarea - DELETE
```
**************************************************************

## Servidor local

Instalación de dependencias
``` bash
    npm install
```
Crear el archivo .env en en la raiz del proyecto. (El ejemplo se encuentra como .env.example)
``` bash
    /.env
```
Una vez instaladas las dependencias se puede correr el servidor de manera local.
``` bash
    npm run start:dev
```

************************
## Nota (importante)

### *Los archivos correspondientes para testear los endpoints se encuentran dentro de cada módulo con extension .http para la extensión "REST client" de vscode(revisar documentación).
https://marketplace.visualstudio.com/items?itemName=humao.rest-client
