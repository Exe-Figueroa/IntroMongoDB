/** 06-Mongo en VSCode
 * *Primero se instala la extension oficial de mongo db
 * *Conectarse al cluster creado en mongo atlas
 * *Cambiar el nombre (opcional)
 * *Crear carpeta para guardar los archivos con las consultas
 * *use => es para identificar a que db nos vamos a conectar
 * *db.{collection} => es para seleccionar una colección específica dentro de la db seleccionada
 * *.find() => Es para filtrar en base a alguna propiedad específica
 * *.count()=> Nos dice la cantidad de elementos que coinciden con la característica especificada
 */

/** 07-Mongo con Docker
 * *Se crea un .yml para crear el servicio de mongodb
 * *version => Hace referencia a la versión de la sintaxis que se va a utilizar en el archivo
 * *services => Son los servicios que vamos a levantar, base de datos, administradores de bases de datos, etc.
 * *image => se le dice que version de mongo queremos correr (Al no instalar todos los drivers para levantar bases de datos de mongo este tiene que traer esa información de algún lado y para eso sirven las imágenes)
 * *ports=> Es la manera que vamos a tener para comunicarnos con esa db (27017 porque es el puerto por el que mongo recibe sus conexiones)
 * *env=> Variables de entorno de nuestra máquina (para poder brindar acceso a la misma)
 * *volumes => Es la forma en que vamos a decirle al contenedor que guarde estado (Osea la info y todos los cambios realizados en el)
 *  ?Para ello creamos una carpeta en la que mongo guardará sus archivos
 * *En el archivo se le especifica la ruta local en la que vamos a guardar los cambios, se colocan ":/" y se le especifica a que carpeta se le hace biding (O como sea que se escriba).
 * *Basicamente se le dice lo que pase acá (/data/db) guardalo acá (./mongo_data)
 * *Ignoramos dicha carpeta en el .gitignore
 * *Levantar contenedor
 * *Conectar con compass
 * *Conectar con vsc y ejecutar pruebas
 */

/** 08-Conectándonos usando mongosh
 * *Creamos carpeta con un archivo .md para los comandos
 * *El comando dice que queremos ejecutar una terminal en el contenedor de mongodb
 * *El comando de mongosh "URI" es para conectarse a la db
 * *Los comandos funcionan igual a los de las querys de los archivos
 */

/** 09-JSON vs BSON
 * *Son formatos en los que mongo guarda los datos
 * *Ventajas de JSON:
 *  ?Amigable
 *  ?Se puede leer
 *  ?Es un formato muy usado
 * *Desventajas de JSON:
 *  ?Basado en texto
 *  ?Consume mucho espacio
 *  ?Es limitado => string, number, booleans, array
 * *Ventajas de BSON:
 *  ?Representación binaria de JSON
 *  ?No consume espacio
 *  ?Alto rendimiento
 *  ?Tipos de datos => los json más date, raw binary, integer, long, float
 * *Desventajas de BSON:
 *  ?No es estándar
 *  ?Lenguaje para máquinas
 *  ?No es fácil de leer
 * *Mongo muestra los datos en JSON y los maneja y almacena en BSON
 * *Datos de BSON que no están en JSON:
 *  ?byte
 *  ?int32
 *  ?int64
 *  ?uint64
 *  ?double
 *  ?decimal128
 *  ?date
 *  ?objectId
 *  ?array
 */

/** 10-Insertando un documento
 *  *No hace falta crearla primero para utilizarla. Solo con colocar su nombre mongo entiende que la debe crear
 * *Tener en cuenta que el playgorund se queda con el output de la última instrucción
 * *Descubrimiento => Se puede editar el output y esa info se enviará a la db. Puede servir para casos de corrección de datos y cosas por el estilo
 */
