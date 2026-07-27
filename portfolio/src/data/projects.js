import designImage from "../assets/projects/design.png";
import ventaImage from "../assets/projects/mostrar-ventass.png";

const projects = [
  {
    id: 1,

    title: "API Bazar",

    type: "API REST",

    image: ventaImage,

    description:
      "API REST desarrollada con Spring Boot para gestionar productos, clientes, ventas y control de stock.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Docker",
    ],

    repositoryUrl: "https://github.com/FABRIFAMAF/bazar-api.git",
  },

  {
    id: 2,

    title: "Taco Cloud",

    type: "Aplicación Web",

    image: designImage,

    description:
      "Aplicación web desarrollada siguiendo el libro Spring in Action, implementando autenticación, persistencia y gestión de pedidos.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JDBC",
      "Thymeleaf",
      "H2 Database",
    ],

    repositoryUrl: "https://github.com/FABRIFAMAF/taco-cloud.git",
  },
];

export default projects;