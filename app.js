const express = require("express"); // Importar Express
const app = express(); // Crear una instancia de Express
const contenidoRoutes = require("./routes/contenidoRoutes"); // Importar las rutas para manejar el contenido
const db = require("./conexion/database"); // Importar la conexión a la base de datos

// Middlewares
app.use(express.json()); // Middleware para parsear JSON en las solicitudes
app.use("/", contenidoRoutes); // Usar las rutas de contenido en la raíz del servidor

// Server
const PORT = process.env.PORT || 3000; // Establecer el puerto, usando la variable de entorno PORT o 3000 por defecto
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server funcionando en: http://localhost:${PORT}`); // Mensaje en consola para indicar que el servidor está corriendo
});
