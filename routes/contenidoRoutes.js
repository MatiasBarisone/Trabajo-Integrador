const express = require('express');
const router = express.Router();
const db = require('../conexion/database');
const contenidoController = require('../controllers/contenidoController');

// Endpoint para obtener todas las producciones
router.get('/producciones', contenidoController.getAllProducciones);

// Endpoint para crear una produccion
router.post('/nuevaProduccion', contenidoController.getCreateProducciones);

router.get('/producciones/:id', contenidoController.getProduccionById);

router.put('/updateProduccion/:id', contenidoController. getProduccionUpdate);

router.delete('/deleteProduccion/:id', contenidoController.deleteProduccionById);

module.exports = router;
    