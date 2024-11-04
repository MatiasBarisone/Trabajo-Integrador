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
    },
    dialectOptions: {
      connectTimeout: 60000
    }
  }
);

// Autenticación de la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL database using Sequelize");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Exportamos la instancia de Sequelize
module.exports = sequelize;
