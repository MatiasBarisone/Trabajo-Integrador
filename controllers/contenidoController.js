const Producciones = require('../models/producciones');

exports.getAllProducciones = async (req, res) => {
    try {
        const producciones = await Producciones.findAll();
        res.status(200).json(producciones);
    } catch (error) {
        console.error('Error fetching producciones:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
