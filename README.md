# Ejercicio-fullstack-mobile

El objetivo de este ejercicio es evaluar las habilidades de un programador fullstack javascript, principalmente orientado a desarrollo de aplicaciones moviles con react native y servicios con nodejs. Sentite libre de agregar/modificar todo lo que consideres necesario para sumarle valor al proyecto, sin perjudicar la idea central del ejercicio.

Forma de entrega

La forma de entregar la solución de este ejercicio es haciendo un fork de este repo y un pull request con la solución.

### Ejercicio 1 – API Rest NodeJs Este punto consiste en armar un API Rest en Node.js (para ahorrar tiempo, como base puedes utilizar un stack de desarrollo con el que estés familiarizado). Es necesario crear:

- Un método que retorne una lista de hoteles. El mismo será utilizado en el ejercicio 2.1.
- Un método que retorne el detalle de un hotel.

Extras/Plus Los plus son adicionales que suman valor a tu ejercicio, aunque no son obligatorios.

Uso de patrones de diseño y best practices.
Uso de ES6 o TYPESCRIPT
Uso de herramientas como webpack, gulp o algún gestor de tareas.

**Modelo de respuesta: lista de hoteles**
```json
{
	"hotels" : [

		{
			"name" : "Hotel Emperador",
			"stars" : "3",
			"price" : "1596",
		},
		{
			"name" : "Petit Palace San Bernardo",
			"stars" : "4",
			"price" : "2145",
		},
		{
			"name" : "Hotel Nuevo Boston",
			"stars" : "2",
			"price" : "861",
		}
	]
}
```

**Modelo de respuesta: detalle de hotel**
```json
{
  "name" : "Hotel Emperador",
  "stars" : "3",
  "price" : "1596",
}
```

### Ejercicio 2 - Mobile App

Este ejercicio consiste en crear una aplicación **React Native** la cual debe tener:

- Una pantalla donde se listen los hoteles que devuelve el método **lista de hoteles** del Api Rest del ejercicio 1.
- Una pantalla donde se muestre el detalle de un hotel que se consume del método **detalle de hotel** del Api Rest del ejercicio 1.
- Debe haber navegación tanto de la pantalla de resultado a detalle y viceversa.
- Uso de patrones de diseño y best practices.
