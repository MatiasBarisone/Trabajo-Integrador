const express = require('express');
const router = express.Router();
const db = require('../conexion/database');
const contenidoController = require('../controllers/contenidoController');

// Endpoint para obtener todas las producciones
router.get('/producciones', contenidoController.getAllProducciones);

// Endpoint para crear una produccion
router.post('/nuevaProduccion', contenidoController.getCreateProducciones);

router.post('/', (req, res) => {
    // Add new content
});

router.put('/:id', (req, res) => {
    // Update content by ID
});

router.delete('/:id', (req, res) => {
    // Delete content by ID
});

module.exports = router;
    