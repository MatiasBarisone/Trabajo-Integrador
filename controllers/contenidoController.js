const Producciones = require("../models/producciones");
const Generos = require("../models/generos");
const Reparto = require("../models/reparto");

//Obtener todas las producciones
exports.getProducciones = async (req, res) => {
  try {
    const producciones = await Producciones.findAll({
      include: [
        {
          model: Generos,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
        {
          model: Reparto,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
      ],
    });
    if (producciones.length === 0) {
      return res.status(404).json({ message: "No se encontraron producciones." });
    }
    res.status(200).json(producciones);
  } catch (error) {
    console.error("Error al obtener las producciones:", error); // Log del error para depuración
    if (error.name === 'SequelizeDatabaseError') {
      return res.status(500).json({
        message: "Error en la base de datos al obtener las producciones.",
        error: error.message,
      });
    }
    res.status(500).json({
      message: "Error interno al obtener las producciones.",
      error: error.message,
    });
  }
};


// Crear una nueva producción
exports.createProduccion = async (req, res) => {
  const { generos, reparto, ...produccionData } = req.body; // Extraemos géneros y reparto del cuerpo de la solicitud

  try {
    // Creamos la nueva producción
    const nuevaProduccion = await Producciones.create(produccionData);

    // Asignamos géneros y reparto a la producción creada
    if (generos && Array.isArray(generos) && generos.length > 0) {
      await nuevaProduccion.setGeneros(generos); // Relacionamos géneros
    }

    if (reparto && Array.isArray(reparto) && reparto.length > 0) {
      await nuevaProduccion.setRepartos(reparto); // Relacionamos reparto
    }

    // Buscamos nuevamente la producción con géneros y reparto incluidos
    const produccionConRelaciones = await Producciones.findByPk(
      nuevaProduccion.produccion_id,
      {
        include: [
          {
            model: Generos,
            through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
          },
          {
            model: Reparto,
            through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
          },
        ],
      }
    );

    res.status(200).json({
      message: "Producción creada correctamente",
      produccion: produccionConRelaciones,
    });
  } catch (error) {
    console.error("Error al crear la producción:", error);
    res.status(500).json({
      message: "Error al crear la producción",
    });
  }
};


// Obtener una producción por ID
exports.getProduccionById = async (req, res) => {
  const { id } = req.params; // Extraemos el ID de los parámetros de la solicitud
  try {
    const produccion = await Producciones.findByPk(id, {
      include: [
        {
          model: Generos,
          through: { attributes: [] }, // Incluir los géneros
        },
        {
          model: Reparto,
          through: { attributes: [] }, // Incluir el reparto
        },
      ],
    });

    if (produccion) {
      res.status(200).json({
        message: "Producción encontrada",
        produccion,
      });
    } else {
      res.status(404).json({ message: "Producción no encontrada" }); // Si no se encuentra, devolvemos error 404
    }
  } catch (error) {
    console.error("Error al obtener la producción:", error);
    res.status(500).json({ message: "Error al obtener la producción" });
  }
};


// Actualizar una producción por ID
exports.updateProduccion = async (req, res) => {
  const { id } = req.params; // Extraemos el ID de los parámetros de la solicitud
  const { generos, reparto, ...produccionData } = req.body; // Extraemos géneros, reparto y otros datos del cuerpo de la solicitud
  
  try {
    const produccion = await Producciones.findByPk(id); // Buscamos la producción por ID
    
    if (produccion) {
      await produccion.update(produccionData); // Actualizamos los datos de la producción

      // Actualizamos géneros y reparto si se proporcionan
      if (generos) {
        await produccion.setGeneros(generos); // Actualizamos géneros
      }
      if (reparto) {
        await produccion.setRepartos(reparto); // Actualizamos reparto
      }

      // Buscamos nuevamente la producción con las relaciones actualizadas
      const produccionConRelaciones = await Producciones.findByPk(id, {
        include: [
          {
            model: Generos,
            through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
          },
          {
            model: Reparto,
            through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
          },
        ],
      });

      res.status(200).json({
        message: "Producción actualizada correctamente",
        produccion: produccionConRelaciones,
      });
    } else {
      res.status(404).json({ message: "Producción no encontrada" }); // Si no se encuentra, devolvemos error 404
    }
  } catch (error) {
    console.error("Error al actualizar la producción:", error);
    res.status(500).json({ message: "Error al actualizar la producción" });
  }
};

// Borrar una producción por ID
exports.deleteProduccion = async (req, res) => {
  const { id } = req.params; // Extraemos el ID de los parámetros de la solicitud
  try {
    const produccion = await Producciones.findByPk(id); // Buscamos la producción por ID
    
    if (produccion) {
      await produccion.destroy(); // Si se encuentra, eliminamos la producción
      res.status(200).json({ message: "Producción eliminada exitosamente" }); // Respondemos con éxito
    } else {
      res.status(404).json({ message: "Producción no encontrada" }); // Si no se encuentra, devolvemos error 404
    }
  } catch (error) {
    console.error("Error al eliminar la producción:", error);
    res.status(500).json({ message: "Error al eliminar la producción" });
  }
};


// Filtrar producciones por título
exports.filterByTitulo = async (req, res) => {
  const { titulo } = req.query; // Obtenemos el título de los parámetros de consulta

  try {
    const producciones = await Producciones.findAll({
      where: { titulo }, // Filtramos por título exacto
      include: [
        {
          model: Generos,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
        {
          model: Reparto,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
      ],
    });

    if (producciones.length > 0) {
      res.status(200).json({
        message: "Producciones encontradas",
        producciones,
      }); // Si se encuentran producciones, las devolvemos con un mensaje de éxito
    } else {
      res.status(404).json({ message: "No se encontraron producciones con el título proporcionado" }); // Si no, devolvemos error 404
    }
  } catch (error) {
    console.error("Error al filtrar por título:", error);
    res.status(500).json({ message: "Error al filtrar por título" });
  }
};


// Filtrar producciones por género
exports.filterByGenero = async (req, res) => {
  const { genero_id } = req.query; // Obtenemos el ID del género de los parámetros de consulta

  try {
    const producciones = await Producciones.findAll({
      include: [
        {
          model: Generos,
          where: { genero_id }, // Filtramos por género
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
        {
          model: Reparto,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
      ],
    });

    if (producciones.length > 0) {
      res.status(200).json({
        message: "Producciones encontradas",
        producciones,
      }); // Si se encuentran producciones, las devolvemos con un mensaje de éxito
    } else {
      res.status(404).json({ message: "No se encontraron producciones con el género proporcionado" }); // Si no, devolvemos error 404
    }
  } catch (error) {
    console.error("Error al filtrar por género:", error);
    res.status(500).json({ message: "Error al filtrar por género" });
  }
};


// Filtrar producciones por categoría
exports.filterByCategoria = async (req, res) => {
  const { categoria_id } = req.query; // Obtenemos el ID de la categoría de los parámetros de consulta

  try {
    const producciones = await Producciones.findAll({
      where: { categoria_id }, // Filtramos por categoría
      include: [
        {
          model: Generos,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
        {
          model: Reparto,
          through: { attributes: [] }, // Excluimos atributos de la tabla intermedia
        },
      ],
    });

    if (producciones.length > 0) {
      res.status(200).json({
        message: "Producciones encontradas",
        producciones,
      }); // Si se encuentran producciones, las devolvemos con un mensaje de éxito
    } else {
      res.status(404).json({ message: "No se encontraron producciones con la categoría proporcionada" }); // Si no, devolvemos error 404
    }
  } catch (error) {
    console.error("Error al filtrar por categoría:", error);
    res.status(500).json({ message: "Error al filtrar por categoría" });
  }
};
