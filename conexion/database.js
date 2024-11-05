// Importamos Sequelize desde la librería sequelize
const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')
const ENV = process.env.NODE_ENV || 'local'
dotenv.config({ path: `.env.${ENV}` })



// Configuramos la conexión a la base de datos con Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
      timestamps: false,
    }
  }
);

// Autenticación de la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la base de datos con exito!");
  })
  .catch((err) => {
    console.error("Hubo un error al conectarse a la base de datos:", err);
  });

// Exportamos la instancia de Sequelize
module.exports = sequelize;
