// Importamos Sequelize desde la librería sequelize
const { Sequelize } = require("sequelize");

// Configuramos la conexión a la base de datos con Sequelize
// Parámetros: nombre de la base de datos, usuario, contraseña, y detalles de conexión
const sequelize = new Sequelize("trailerflix", "root", "15615913matias", {
  host: "localhost", // Servidor de la base de datos
  dialect: "mysql",  // Tipo de base de datos que estamos usando (MySQL)
  define: {
    timestamps: false, // Desactivar timestamps globalmente para todas las tablas
  },
});

// Autenticación de la conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to MySQL database using Sequelize"); // Si la conexión es exitosa, muestra este mensaje
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err); // Si hay un error, lo muestra en la consola
  });

// Exportamos la instancia de Sequelize para que esté disponible en otros archivos
module.exports = sequelize;
