## Descripción

Taco Cloud es una aplicación web desarrollada con Spring Boot basada en el proyecto homónimo presentado en el libro *Spring in Action* de Craig Walls.

La aplicación permite a los usuarios registrarse, autenticarse y realizar pedidos de tacos personalizados, seleccionando los ingredientes de su preferencia mediante una interfaz web desarrollada con Spring MVC y Thymeleaf.

A lo largo del desarrollo se exploran diversos componentes del ecosistema Spring, entre ellos Spring MVC, Spring Security, Spring Data JDBC y Bean Validation. Aunque el proyecto toma como base el desarrollo propuesto en el libro, se realizaron distintas adaptaciones con fines de aprendizaje. La más significativa fue reemplazar la persistencia mediante Spring Data JPA por Spring Data JDBC para comprender con mayor profundidad el funcionamiento de la persistencia relacional sin utilizar un ORM.



## Objetivo del proyecto

El objetivo principal de este proyecto fue comprender el funcionamiento interno del ecosistema Spring más allá de la utilización de sus abstracciones. El desarrollo estuvo orientado a entender el propósito del código que el framework genera o ejecuta automáticamente, evitando utilizar herramientas como una caja negra.

Comprender el trabajo que Spring automatiza permite tomar decisiones de diseño más fundamentadas, mantener un mayor control sobre la aplicación y utilizar el framework de manera consciente.

Además, el proyecto permitió profundizar en diversos componentes del ecosistema Spring, entre ellos Spring MVC, Thymeleaf, Spring Security, Spring Data JDBC y Bean Validation, comprendiendo cómo interactúan para construir una aplicación web completa.



## Tecnologías utilizadas

- Java 21
- Spring Boot
- Spring MVC
- Spring Security
- Spring Data JDBC
- Thymeleaf
- Bean Validation
- BCrypt Password Encoder
- H2 Database
- Maven
- Lombok
- Git
- GitHub


## Funcionalidades

- Registro de usuarios.
- Inicio y cierre de sesión.
- Diseño de tacos personalizados mediante selección de ingredientes.
- Creación de pedidos compuestos por uno o más tacos.
- Almacenamiento persistente de pedidos.
- Validación de los datos ingresados en los formularios.
- Acceso restringido a las funcionalidades protegidas de la aplicación.



## Arquitectura

La aplicación sigue una arquitectura en capas basada en el patrón MVC, separando la lógica de presentación, el dominio, la seguridad y el acceso a datos.

src/main/java/com/fabri/taco/
├── Config/
│   └── Configuración general de Spring
├── Controller/
│   └── Controladores encargados de procesar las solicitudes HTTP
├── Converter/
│   └── Conversión de los datos enviados desde los formularios
├── Domain/
│   └── Clases que representan el dominio de la aplicación
├── Repository/
│   └── Acceso y persistencia de datos mediante Spring Data JDBC
└── Security/
    └── Configuración de autenticación y autorización

src/main/resources/
├── static/
│   └── Imágenes, hojas de estilo y otros recursos estáticos
├── templates/
│   └── Vistas HTML procesadas mediante Thymeleaf
├── application.yml
│   └── Configuración de la aplicación y de la base de datos
└── schema.sql
    └── Definición del esquema de la base de datos
