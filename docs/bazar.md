## Descripción

Bazar API es una aplicación backend desarrollada con Java y Spring Boot para la gestión de clientes, productos y ventas de un bazar.

La aplicación expone una API REST capaz de realizar operaciones CRUD sobre las principales entidades del sistema e incorpora lógica de negocio para el control automático del stock, el cálculo del total de cada venta y la realización de consultas específicas sobre la información almacenada.

El proyecto fue desarrollado con el objetivo de profundizar en el uso de Spring Data JPA, Hibernate y el modelado de relaciones entre entidades, utilizando MySQL como base de datos y Docker para la contenerización del entorno de ejecución.


## Objetivo del proyecto

El objetivo principal de este proyecto fue desarrollar una API REST completa como
medio de aprendizaje y práctica del ecosistema Spring.

Durante su desarrollo se buscó profundizar en el uso de Spring Data JPA,
Hibernate y el modelado de relaciones entre entidades, aplicando una
arquitectura organizada en capas e incorporando lógica de negocio propia
de un sistema de gestión comercial.


## Tecnologías utilizadas

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Docker
- Docker Compose
- Maven
- Postman
- Git
- GitHub


## Arquitectura

La aplicación sigue una arquitectura en capas.

### Controller

Recibe las solicitudes HTTP y expone los endpoints de la API REST.

### Service

Implementa la lógica de negocio, incluyendo el cálculo de ventas, la actualización del stock y las validaciones necesarias.

### Repository

Gestiona el acceso a la base de datos mediante Spring Data JPA.

### Model

Representa las entidades persistentes y las relaciones entre ellas.

### DTO

Utilizados para devolver respuestas específicas evitando exponer directamente el modelo cuando no resulta conveniente.



## Modelo de dominio

## Modelo de dominio

El sistema se compone de cuatro entidades principales que representan los elementos fundamentales del proceso de venta.


#Cliente

Representa a los compradores registrados.

#Producto

Contiene la información del catálogo y el stock disponible.

#Venta

Representa una operación comercial realizada por un cliente.

#DetalleVenta

Relaciona cada venta con los productos vendidos, almacenando
cantidad, precio unitario y subtotal.



## Funcionalidades

- Gestión completa de clientes.
- Gestión completa de productos.
- Registro de ventas.
- Cálculo automático del total.
- Actualización automática del stock.
- Validación de stock disponible.
- Consulta de productos con bajo stock.
- Consulta de ventas por fecha.
- Obtención de la venta de mayor valor.



## Decisiones técnicas

Para entender las desiciones tecnicas hay que tener claro el objetivo para el que esta destinada la API, que es la simplificacion de tarea de gestion a aquellos trabajadores que utilicen la API
Lo primero que se realizo fue la implementacion de un CRUD completo de las principales entidades en el cual para llevarlo a cabo se opto por Spring Data JPA por su simplicidad e implementacion en tiempo de ejecucion. Pero luego uno analiza que con un CRUD completo el destinatario de la API todavia debe realizar muchos calculos y tomar decisiones logisticas, por ende habia que seguir analizando, que mas podemos hacer para mejorar el servicio, por ende se decidio que la API tenga la capacidad de actualizar el stock luego de cada venta y que calcule el monto total de una venta. Decidimos que esta implementacion se realice en la capa de service para eviter que los destinatarios de la API modifiquen informacion sensible. Esta decision nos llevo a que tuviramos que realizar modificaciones en la implementacion teniendo que agregar un entidad que facilite este proceso, esta es DetalleVenta. La incorporación de la entidad DetalleVenta permitió modelar correctamente la relación entre ventas y productos, almacenando para cada producto vendido su cantidad, precio unitario y subtotal. De esta forma, la venta pasó a representar una operación comercial completa en lugar de ser solo una relación entre un cliente y varios productos.



## Aprendizajes obtenidos

- Spring Data JPA.
- Relaciones entre entidades.
- Gestión transaccional.
- Separación de responsabilidades mediante arquitectura en capas.
- Contenerización de aplicaciones utilizando Docker.
