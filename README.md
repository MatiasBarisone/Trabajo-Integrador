Trabajo Integrador Relacional 

### Para instalar las dependencias necesarias, ejecuta los siguientes comandos:

* npm install express
* npm install nodemon
* npm install sequelize
* npm install mysql2

Se usa nodemon para reiniciar automáticamente el servidor durante el desarrollo.

### Configuración de la Base de Datos
En el archivo database.js, se configura la conexión a la base de datos, estableciendo timestamps: false de manera global. 
También se incluye una función para autenticar la conexión con la base de datos.

### Estructura del Proyecto
### app.js
Se importan las rutas (contenidoRoutes), express, la base de datos (db) y sequelize.
Configuración del middleware y servidor.

### Modelos
* Producciones (Producciones.js): Define la tabla de producciones, incluye una referencia de clave foránea a categoria_id.

* Categorías (Categoria.js): Define las categorías de las producciones.

* Reparto (Reparto.js): Define los actores que forman parte de las producciones.

* Géneros (Generos.js): Define los géneros de las producciones.

* Producción-Género (Produccion_genero.js): Tabla intermedia para la relación de muchos a muchos entre Producciones y Géneros, con claves foráneas produccion_id y genero_id.

* Producción-Reparto (Produccion_reparto.js): Tabla intermedia para la relación de muchos a muchos entre Producciones y Reparto, con claves foráneas produccion_id y reparto_id.

### Controlador (contenidoController.js)
* getProducciones: Obtiene todas las producciones, incluyendo sus géneros y reparto asociados.

Respuesta 200: Lista de producciones.
Respuesta 500: Error al obtener las producciones.

* createProduccion: Crea una nueva producción con sus géneros y reparto asociados.

Respuesta 200: Producción creada con éxito.
Respuesta 500: Error al crear la producción.

* getProduccionById: Obtiene una producción por su ID, incluyendo géneros y reparto.

Respuesta 200: Producción encontrada.
Respuesta 404: Producción no encontrada.
Respuesta 500: Error al obtener la producción.

* updateProduccion: Actualiza una producción existente por su ID.

Respuesta 200: Producción actualizada.
Respuesta 404: Producción no encontrada.
Respuesta 500: Error al actualizar la producción.

* deleteProduccion: Elimina una producción por su ID.

Respuesta 200: Producción eliminada.
Respuesta 404: Producción no encontrada.
Respuesta 500: Error al eliminar la producción.

* filterByTitulo: Filtra las producciones por título exacto.

Respuesta 200: Producción encontrada.
Respuesta 404: No se encontraron producciones con el título proporcionado.
Respuesta 500: Error al filtrar por título.

* filterByGenero: Filtra las producciones por género.

Respuesta 200: Producciones encontradas.
Respuesta 404: No se encontraron producciones con el género proporcionado.
Respuesta 500: Error al filtrar por género.

* filterByCategoria: Filtra las producciones por categoría.

Respuesta 200: Producciones encontradas.
Respuesta 404: No se encontraron producciones con la categoría proporcionada.
Respuesta 500: Error al filtrar por categoría.

### Rutas (contenidoRoutes.js)
GET /producciones: Obtener todas las producciones.
POST /nuevaProduccion: Crear una nueva producción.
GET /producciones/:id: Obtener una producción por ID.
PUT /updateProduccion/:id: Actualizar una producción por ID.
DELETE /deleteProduccion/:id: Eliminar una producción por ID.
GET /producciones/filtrar/titulo: Filtrar producciones por título.
GET /producciones/filtrar/genero: Filtrar producciones por género.
GET /producciones/filtrar/categoria: Filtrar producciones por categoría.