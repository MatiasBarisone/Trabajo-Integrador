### Primero instalamos las dependencias
npm i express.
npm i nodemon (me es mas facil que --watch).
npm i sequelize.
npm i mysql2.

### Modificamos .env para correcta conexion a la db

### Creamos models
Producciones.js contiene las producciones .
Categoria.js contiene las categorias.
Reparto.js contiene los actores.
Generos.js contiene los generos.
Produccion_genero.js tabla intermedia entre producciones y generos.
Produccion_reparto.js tabla intermedia entre producciones y reparto.

### Producciones.js
Llamamos a la conexion de la db 
Definimos el contenido de producciones a partir de la bd.
Hacemos referencia de la FK de categoria_id.
Por ultimo exportamos producciones.js.

### Categorias.js
Llamamos a la conexion de la db .
Definimos el contenido de categorias .
Por ultimo la exportamos.

### Reparto.js
Llamamos a la conexion de la db.
Definimos el contenido de Reparto.
Por ultimo lo exportamos.

### Generos.js
Llamamos a la conexion de la db.
Definimos el contenido de Generos.
Por ultimo lo exportamos.

### Produccion_generos.js
Llamamos a la conexion de la db.
Llamamos a producciones.js y generos.js.
Declaramos el contenido de produccion_genero.
Hacemos referencia de las dos FK produccion_id y genero_id.
Luego hacemos la relacion de muchos a muchos de Producciones y Generos.
Por ultimo exportamos produccion_genero.

### Produccion_reparto.js
Llamamos a la conexion de la db.
Llamamos a producciones.js y reparto.js.
Declaramos el contenido de produccion_reparto.
Hacemos referencia de las dos FK produccion_id y reparto_id.
Luego hacemos la relacion de muchos a muchos de Producciones y Reparto.
Por ultimo exportamos produccion_reparto.

### contenidoController.js
Hacemos un export.getAllProducciones para llamar a todas las producciones cargadas.
Declaramos Try + allProducciones para luego recorrer la tabla producciones y si sale todo bien un status 200 y el json, por el contrario error 500 no se pueden traer las producciones. 

Hacemos un export.getCreateProducciones para poder crear una produccion.
Declaramos titulo, resumen, temporadas, poster, trailer, categoria_id.
Try nuevaProduccion, Producciones.create y llamamos lo que habia declarado anteriormente.
Status 200 si sale todo bien, por el contrario status 500 error al crear la produccion

Hacemos un export.getProduccionById para buscar una produccion por el ID.
Llamamos al ID.
Hacemos un control de error 400 para que el id sea si o si numero positivo.
Otro control de error 404 para produccion no encontrada.
Status 200 y si esta todo bien devolvemos el json de la produccion.
Manejo de errores por si hay errores de servidor (500).

Hacemos un exports.getProduccionUpdate para poder actualizar una produccion.
Llamamos al ID y hacemos que tome el parametro de la URL.
Declaramos las instancias para poder actualizar la produccion.
Control de error 400 para que el ID sea numero positivo.
Actualizamos la produccion con Producciones.create.
Verificamos si se actualizo la fila.
Mostramos la produccion actualizada.
Status 200 si sale todo bien.
Error 500 error en servidor.

Hacemos un exports.deleteProduccionById para borrar una produccion por ID.
Obtenemos el ID por ULR.
Control de error 400 para que el ID sea numero positivo.
Buscamos la produccion con Producciones.findByPk.
Verificamos si se encontro la produccion.
Con produccion.destroy eliminamos dicha produccion.
Status 200 Produccion eliminada correctamente.
Error 500 de servidor.

### contenidoRoutes
Declaramos express, router, llamamos a la db y a contenidoController asi podemos sincronizar.
Get /producciones para que traiga todas las producciones.
Post /nuevaProduccion para crear una nueva produccion.
Get /producciones/:id para buscar producciones por ID.
Put /updateProduccion/:id para actualizar produccion.
delete /deleteProduccion/:id para borrar produccion.