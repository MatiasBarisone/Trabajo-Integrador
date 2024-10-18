const Producciones = require('../models/producciones');

//Traer todas las producciones
exports.getAllProducciones = async (req, res) => {
    try {
        const allProducciones = await producciones.findAll();
        res.status(200).json(allProducciones);
    } catch (error) {
        res.status(500).json({ error: 'No se pudieron traer las producciones' });
    }
};
//Crear una produccion
exports.getCreateProducciones = async (req, res) => {
    const { titulo, resumen, temporadas, poster, trailer, categoria_id } = req.body; // Extraer datos del cuerpo de la solicitud

    // Validación básica de campos requeridos
    if (!titulo || typeof titulo !== 'string') {
        return res.status(400).json({ error: 'El título es requerido y debe ser una cadena.' });
    }

    if (categoria_id === undefined || typeof categoria_id !== 'number' || categoria_id < 0) {
        return res.status(400).json({ error: 'La categoría es requerida y debe ser un número entero no negativo.' });
    }

    // Validación de temporadas (opcional) - debe ser un número entero no negativo o nulo
    if (temporadas !== undefined) {
        if (typeof temporadas !== 'number' || temporadas < 0) {
            return res.status(400).json({ error: 'El número de temporadas debe ser un número entero no negativo o nulo.' });
        }
    }

    // Validación de poster y trailer (opcional) - deben ser cadenas o nulos
    if (poster !== undefined && typeof poster !== 'string') {
        return res.status(400).json({ error: 'El poster debe ser una cadena o nulo.' });
    }

    if (trailer !== undefined && typeof trailer !== 'string') {
        return res.status(400).json({ error: 'El trailer debe ser una cadena o nulo.' });
    }

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
        res.status(201).json({
            message: 'Producción creada exitosamente',
            produccion: nuevaProduccion
        });
    } catch (error) {
        console.error('Error al crear la producción:', error); // Log del error en consola
        res.status(500).json({ error: 'Error al crear la producción' });
    }
};

// Obtener una Producción por ID
exports.getProduccionById = async (req, res) => {
    const { id } = req.params; // Extraer el ID de los parámetros de la solicitud

    // Validación del ID: Verificar que sea un número válido y positivo
    if (!id || isNaN(id) || id <= 0) {
        return res.status(400).json({ error: 'El ID debe ser un número entero positivo válido.' });
    }

    try {
        // Buscar la producción por ID
        const produccion = await Producciones.findByPk(id);

        // Verificar si se encontró la producción
        if (!produccion) {
            return res.status(404).json({ error: 'Producción no encontrada.' });
        }

        // Enviar la producción encontrada
        res.status(200).json(produccion);
    } catch (error) {
        console.error('Error al obtener la producción:', error); // Log del error en consola
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};
// Actualizar una Producción
exports.getProduccionUpdate = async (req, res) => {
    const id = parseInt(req.params.id, 10); // Obtener el ID de los parámetros de la URL
    const { titulo, resumen, temporadas, poster, trailer, categoria_id } = req.body;

    // Validación básica de ID y campos requeridos
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ error: 'El ID debe ser un número entero positivo válido.' });
    }

    try {
        // Intentar actualizar la producción
        const [produccionToUpdate] = await Producciones.update(
            { titulo, resumen, temporadas, poster, trailer, categoria_id },
            { where: { id } }
        );

        // Verificar si se actualizó alguna fila
        if (produccionToUpdate === 0) {
            return res.status(404).json({ error: 'Producción no encontrada o no actualizada.' });
        }

        // Volver a obtener la producción actualizada
        const produccion = await Producciones.findByPk(id);

        // Enviar la producción actualizada
        res.status(200).json(produccion);
    } catch (error) {
        console.error('Error al actualizar la producción:', error);
        res.status(500).json({ error: 'Error al actualizar la producción.', message: `error: ${error.message}` });
    }
};

exports.deleteProduccionById = async (req, res) => {
    const id = parseInt(req.params.id, 10); // Obtener el ID de los parámetros de la URL y convertirlo en número

    // Validación del ID
    if (isNaN(id) || id <= 0) {
        return res.status(400).json({ error: 'El ID debe ser un número entero positivo válido.' });
    }

    try {
        // Buscar y eliminar la producción
        const produccion = await Producciones.findByPk(id);

        // Verificar si se encontró la producción
        if (!produccion) {
            return res.status(404).json({ error: 'Producción no encontrada.' });
        }

        // Eliminar la producción
        await produccion.destroy();

        // Respuesta exitosa
        res.status(200).json({ message: 'Producción eliminada correctamente.' });
    } catch (error) {
        console.error('Error al eliminar la producción:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
};