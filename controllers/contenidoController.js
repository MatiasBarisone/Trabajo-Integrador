const Producciones = require('../models/producciones');

exports.getAllProducciones = async (req, res) => {
    try {
        const allProducciones = await producciones.findAll();
        res.status(200).json(allProducciones);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron traer las producciones' });
    }
};

exports.getCreateProducciones = async (req, res) => {
    const { titulo, resumen, temporadas, poster, trailer, categoria_id } = req.body; // Extraer datos del cuerpo de la solicitud

    try {
        // Crear una nueva producción en la base de datos
        const nuevaProduccion = await Producciones.create({
            titulo,
            resumen,
            temporadas,
            poster,
            trailer,
            categoria_id
        });

        // Enviar respuesta exitosa
        res.status(200).json({
            message: 'Producción creada exitosamente',
            produccion: nuevaProduccion
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la producción' });
    }
};

