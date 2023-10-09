//DIA 5 -- Crear la conexión con la base de datos. 
//DIA 5 -- Utilizar algún ORM para la conexión. 

const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "2023TP",
      user: "postgres",
      password: "plutos951753",
    },
  });

  module.exports = knex;
  