# API Rest en Node.js

Api demo desarrollada con la finalidad de desarrollar la prueba técnica para **almundo.com**.

### Clonar el proyecto e instalar dependencias

Para descargar el proyecto utilizaremos git, de la siguiente manera:

    git clone https://github.com/grunch/ejercicio-fullstack-mobile.git

Luego entramos en el directorio creado con el código e instalamos los paquetes necesarios.

    cd ejercicio-fullstack-mobile/api
    npm install

Se ejecuta con:

    npm run start

### Base de datos

Se utiliza MongoDB como motor de base de datos, los datos de configuración de la misma se encuentran en el archivo .env ubicado en la raiz de la API.

Fue creada una base de datos temporalmente en **mlab.com** y los datos de conexión a esta bd ya se encuentran en el .env actual.

### Endpoints

Esta API tiene dos endpoints que obtienen la data de la base de datos, el primero devuelve una lista de hoteles y el segundo el detalle un hotel por id

    GET http://localhost:3000/api/hotels
    GET http://localhost:3000/api/hotel/:id

**Modelo de respuesta: lista de hoteles**
```json
[
	{
      "_id": "59bd3fa39d7c8174ca3a8f77",
      "name" : "Hotel Emperador",
      "stars" : "3",
      "price" : "1596",
      "address": "Av. del Libertador 420, Buenos Aires"
	},
	{
      "_id": "59bd3fa39d7c8174ca3a8f78",
      "name" : "Petit Palace San Bernardo",
      "stars" : "4",
      "price" : "2145",
      "address": "Calle de San Bernardo, 3, Madrid"
	},
	{
      "_id": "59bd3fa39d7c8174ca3a8f79",
      "name" : "Hotel Nuevo Boston",
      "stars" : "2",
      "price" : "861",
      "address": "Av. de Aragón, 332, Madrid"
	}
]
```

**Modelo de respuesta: detalle de hotel**
```json
{
  "_id": "59bd3fa39d7c8174ca3a8f77",
  "name" : "Hotel Emperador",
  "stars" : "3",
  "price" : "1596",
  "address": "Av. del Libertador 420"
}
```
