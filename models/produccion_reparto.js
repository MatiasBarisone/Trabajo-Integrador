const { DataTypes } = require("sequelize");
const sequelize = require("../conexion/database");
const Producciones = require("../models/producciones");
const Reparto = require("../models/reparto");

// Definición del modelo 'produccion_reparto' para manejar la tabla intermedia
// en la relación Many-to-Many entre 'Producciones' y 'Reparto'
const produccion_reparto = sequelize.define(
  "produccion_reparto",
  {
    // 'produccion_id' actúa como clave foránea referenciando al modelo 'Producciones'
    produccion_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Producciones, // Referencia a la tabla 'Producciones'
        key: "produccion_id", // Clave foránea que apunta al campo 'produccion_id'
      },
      allowNull: false, // Este campo no puede ser nulo
    },
    // 'reparto_id' actúa como clave foránea referenciando al modelo 'Reparto'
    reparto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Reparto, // Referencia a la tabla 'Reparto'
        key: "reparto_id", // Clave foránea que apunta al campo 'reparto_id'
      },
      allowNull: false, // Este campo no puede ser nulo
    },
  },
  {
    tableName: "produccion_reparto", // Nombre de la tabla en la base de datos
    timestamps: false, // No se crean los campos automáticos 'createdAt' y 'updatedAt'
  }
);

// Definición de la relación Many-to-Many entre 'Producciones' y 'Reparto'
// usando la tabla intermedia 'produccion_reparto'
Producciones.belongsToMany(Reparto, {
  through: produccion_reparto, // Tabla intermedia que conecta ambas entidades
  foreignKey: "produccion_id", // Clave foránea que conecta con la tabla 'Producciones'
});

Reparto.belongsToMany(Producciones, {
  through: produccion_reparto, // Tabla intermedia que conecta ambas entidades
  foreignKey: "reparto_id", // Clave foránea que conecta con la tabla 'Reparto'
});

module.exports = produccion_reparto; // Exportamos el modelo para usarlo en otras partes del proyecto
