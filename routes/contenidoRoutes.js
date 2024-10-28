const express = require("express");
const router = express.Router();
const db = require("../conexion/database");
const contenidoController = require("../controllers/contenidoController");

// Endpoint para obtener todas las producciones
router.get("/producciones", contenidoController.getProducciones);
// Endpoint para crear una produccion
router.post("/nuevaProduccion", contenidoController.createProduccion);
//Buscar produccion por ID
router.get("/producciones/:id", contenidoController.getProduccionById);
//Actualizar produccion
router.put("/updateProduccion/:id", contenidoController.updateProduccion);
//Borrar una produccion
router.delete("/deleteProduccion/:id", contenidoController.deleteProduccion);
// Filtrar producciones por título
router.get("/producciones/filtrar/titulo", contenidoController.filterByTitulo);
// Filtrar producciones por género
router.get("/producciones/filtrar/genero", contenidoController.filterByGenero);
// Filtrar producciones por categoría
router.get("/producciones/filtrar/categoria",contenidoController.filterByCategoria);

module.exports = router;
