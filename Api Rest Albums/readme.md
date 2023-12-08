## Inicio del proyecto
### Instalación
```npm init -y```

## Creamos carpeta src, dentro de ella el archivo index.js
### Crear carpetas dentro de src, controllers,database,routes,services

### Instalación de nodemon
```npm install -D nodemon``` # Para que se reinicie el servidor cada vez que se haga un cambio

### Instalacion express
```npm install express```

## Modificacion package.json
```"dev": "nodemon ./src/index.js"``` # Para que se reinicie el servidor cada vez que se haga un cambio
```"start": "node ./src/index.js"``` # Para iniciar el servidor

## Ejecutar servidor
```npm run dev```

## DATABASE workoutConnection
Este código se encarga de establecer la conexión a una base de datos MongoDB usando Mongoose, un ODM (Object Data Modeling) para MongoDB y Node.js. Aquí está el desglose del código:

```javascript
const mongoose = require('mongoose');

// Contraseña de la base de datos
const password = 'INyr8UqgBNTTFD5n';

// Nombre de la base de datos
const dbname = 'ColeccionDiscos2';

// URI (Uniform Resource Identifier) que contiene la dirección de la base de datos
const uri = `mongodb+srv://axelhgbryan:${password}@cluster0.ukvg6nn.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// Función para conectar a la base de datos
const connectToDatabase = async () => {
    try {
        // Conectar a MongoDB utilizando Mongoose
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión a MongoDB establecida correctamente');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

// Exportar la función para poder usarla en otros archivos
module.exports = connectToDatabase;
```

Explicación:
- `mongoose`: Es la biblioteca de MongoDB para Node.js, que proporciona una interfaz de modelado de datos basada en esquemas.
- `password`: La contraseña de la base de datos. Ten en cuenta que en un entorno de producción, deberías almacenar las contraseñas de manera segura y no incluirlas directamente en el código fuente.
- `dbname`: El nombre de la base de datos que deseas conectar.
- `uri`: La URI que contiene la información necesaria para conectarse a la base de datos MongoDB.
- `connectToDatabase`: Una función asíncrona que intenta establecer la conexión a la base de datos utilizando la URI proporcionada.
- `module.exports`: Permite que la función `connectToDatabase` sea utilizada en otros archivos mediante `require`.

## MODELS workoutModel
Este código define un modelo de Mongoose para un documento de MongoDB relacionado con álbumes de música. Aquí está el desglose del código:

```javascript
const mongoose = require('mongoose');

// Definición del esquema del álbum
const albumSchema = new mongoose.Schema({
    Nombre: { type: String, required: true },
    Fecha: { type: String, required: true },
    Artista: { type: String, required: true },
});

// Creación del modelo 'discos' basado en el esquema definido
const discos = mongoose.model('discos', albumSchema);

// Exportar el modelo para poder usarlo en otros archivos
module.exports = discos;
```

Explicación:
- `mongoose`: La biblioteca de MongoDB para Node.js, que proporciona una interfaz de modelado de datos basada en esquemas.
- `albumSchema`: Es un objeto que define la estructura y las restricciones del documento. En este caso, hay tres campos: `Nombre`, `Fecha`, y `Artista`. Todos son de tipo `String` y se establece que son requeridos (`required: true`).
- `discos`: Se crea un modelo de Mongoose llamado 'discos' basado en el esquema `albumSchema`. Los modelos en Mongoose representan colecciones en la base de datos y proporcionan una interfaz para interactuar con los documentos.
- `module.exports`: Permite que el modelo `discos` sea utilizado en otros archivos mediante `require`. Este modelo se utiliza para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la colección 'discos' de la base de datos.

## Service workoutService
Este código define un conjunto de funciones que interactúan con un modelo de Mongoose llamado `Workout` y proporcionan operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para entrenamientos en una base de datos MongoDB. Aquí está el desglose del código:

```javascript
const Workout = require('../models/workoutModel');

// Obtener todos los entrenamientos
const getAllWorkouts = async () => {
    try {
        const workouts = await Workout.find();
        return workouts;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener un entrenamiento por ID
const getOneWorkout = async (workoutId) => {
    try {
        const workout = await Workout.findById(workoutId);
        if (!workout) {
            throw new Error(`No se encontró un entrenamiento con ID ${workoutId}`);
        }
        return workout;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Crear un nuevo entrenamiento
const createNewWorkout = async (newWorkoutData) => {
    try {
        console.log("Datos recibidos en el servicio:", newWorkoutData);
        const createdWorkout = await Workout.create(newWorkoutData);
        return createdWorkout;
    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }
};

// Actualizar un entrenamiento por ID
const updateOneWorkout = async (workoutId, updatedWorkoutData) => {
    try {
        const updatedWorkout = await Workout.findByIdAndUpdate(workoutId, updatedWorkoutData, { new: true });

        if (!updatedWorkout) {
            throw new Error(`No se encontró un entrenamiento con ID ${workoutId}`);
        }

        return updatedWorkout;
    } catch (error) {
        console.error("Error al actualizar el entrenamiento en el servicio:", error);
        throw new Error(error.message);
    }
};

// Eliminar un entrenamiento por ID
const deleteOneWorkout = async (workoutId) => {
    try {
        const deletedWorkout = await Workout.findByIdAndDelete(workoutId);
        if (!deletedWorkout) {
            throw new Error(`No se encontró un entrenamiento con ID ${workoutId}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
```

1. **`getAllWorkouts`**: Esta función obtiene todos los entrenamientos de la base de datos. Utiliza el método `find` de Mongoose para buscar todos los documentos en la colección `Workout`.

2. **`getOneWorkout`**: Esta función recibe un ID de entrenamiento como parámetro y busca un entrenamiento específico en la base de datos utilizando el método `findById` de Mongoose. Si no encuentra el entrenamiento, lanza un error.

3. **`createNewWorkout`**: Recibe datos de un nuevo entrenamiento como parámetro, crea un nuevo documento de entrenamiento en la base de datos utilizando el método `create` de Mongoose y lo devuelve. Si hay un error durante la creación, lanza una excepción.

4. **`updateOneWorkout`**: Recibe un ID de entrenamiento y datos actualizados como parámetros. Utiliza el método `findByIdAndUpdate` de Mongoose para buscar y actualizar el entrenamiento en la base de datos. Si no encuentra el entrenamiento, lanza un error.

5. **`deleteOneWorkout`**: Recibe un ID de entrenamiento y elimina el entrenamiento correspondiente de la base de datos utilizando el método `findByIdAndDelete` de Mongoose. Si no encuentra el entrenamiento, lanza un error.

Estas funciones son parte de un servicio que encapsula la lógica de acceso a la base de datos para los entrenamientos. El modelo `Workout` proporciona una interfaz para interactuar con la colección de entrenamientos en la base de datos MongoDB.

## v1>routes workoutRoutes
Este código define las rutas de la API para los entrenamientos. Aquí está el desglose del código:

```javascript
const express = require('express');
const router = express.Router();
const workoutController = require('../../controller/workoutController');

// Ruta para obtener todos los entrenamientos
router.get('/datos', workoutController.getAllWorkouts);

// Ruta para obtener un entrenamiento específico por ID
router.get('/', workoutController.getOneWorkout);

// Ruta para renderizar el formulario de creación de entrenamiento
router.get('/createnew', workoutController.renderCreateForm);

// Ruta para procesar el formulario de creación (POST)
router.post('/Create', workoutController.createNewWorkout);

// Ruta para renderizar la página de actualización de entrenamiento
router.get('/actualizar/:workoutId', workoutController.renderUpdateForm);

// Ruta para procesar el formulario de actualización (POST)
router.post('/update/:workoutId', workoutController.updateOneWorkout);

// Ruta para renderizar la página de eliminación de entrenamiento
router.get('/eliminar/:workoutId', workoutController.renderDeleteForm);

// Ruta para procesar la eliminación de entrenamiento (POST)
router.post('/delete/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;

Este código define las rutas relacionadas con los entrenamientos en tu aplicación Express. Aquí está una explicación de cada ruta:

1. **`GET /api/v1/datos`**: Esta ruta invoca la función `getAllWorkouts` del controlador (`workoutController`) cuando se realiza una solicitud GET. Esta ruta es responsable de obtener todos los entrenamientos y enviarlos como respuesta. La respuesta renderiza la plantilla 'index' con la lista de entrenamientos.

2. **`GET /api/v1/`**: Esta ruta invoca la función `getOneWorkout` del controlador cuando se realiza una solicitud GET. La función del controlador obtiene un entrenamiento específico según el ID proporcionado y lo envía como respuesta. La respuesta renderiza la plantilla 'index' con los detalles del entrenamiento.

3. **`GET /api/v1/createnew`**: Esta ruta invoca la función `renderCreateForm` del controlador cuando se realiza una solicitud GET. La función del controlador renderiza la página de formulario para crear un nuevo entrenamiento.

4. **`POST /api/v1/Create`**: Esta ruta invoca la función `createNewWorkout` del controlador cuando se realiza una solicitud POST. La función del controlador crea un nuevo entrenamiento utilizando los datos proporcionados en el formulario y redirige al usuario a la página principal.

5. **`GET /api/v1/actualizar/:workoutId`**: Esta ruta invoca la función `renderUpdateForm` del controlador cuando se realiza una solicitud GET. La función del controlador renderiza la página de formulario de actualización con los detalles del entrenamiento específico que se va a actualizar.

6. **`POST /api/v1/update/:workoutId`**: Esta ruta invoca la función `updateOneWorkout` del controlador cuando se realiza una solicitud POST. La función del controlador actualiza el entrenamiento según los datos proporcionados en el formulario y redirige al usuario a la página principal.

7. **`GET /api/v1/eliminar/:workoutId`**: Esta ruta invoca la función `renderDeleteForm` del controlador cuando se realiza una solicitud GET. La función del controlador renderiza la página de confirmación de eliminación con los detalles del entrenamiento que se va a eliminar.

8. **`POST /api/v1/delete/:workoutId`**: Esta ruta invoca la función `deleteOneWorkout` del controlador cuando se realiza una solicitud POST. La función del controlador elimina el entrenamiento específico y redirige al usuario a la página principal.

Estas rutas proporcionan la funcionalidad completa para interactuar con la colección de entrenamientos a través de tu aplicación.

## src> index.js
Este código define la aplicación Express y la configura para que pueda manejar solicitudes HTTP. Aquí está el desglose del código:

```javascript
Aquí tienes el código del archivo `index.js` comentado:

```javascript
const express = require('express');
const connectToDatabase = require('./database/workoutConnection');
const v1WorkoutRoutes = require('./v1/routes/workoutRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos al iniciar la aplicación
connectToDatabase();

// Middleware para analizar datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log("Datos del formulario antes del middleware de análisis:", req.body);
    next();
});
app.use((req, res, next) => {
    console.log("Datos del formulario después del middleware de análisis:", req.body);
    next();
});

// Configuración para Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); // Ajusta la ruta según la ubicación de tu carpeta de vistas

// Configuración para analizar datos en formato JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas para la versión 1 de la API
app.use('/api/v1', v1WorkoutRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
```

Aquí está la descripción de las secciones:

1. **Conexión a la Base de Datos:**
   - `connectToDatabase();`: Llama a la función para conectar a la base de datos MongoDB.

2. **Middlewares para Analizar Datos del Formulario:**
   - `app.use(express.urlencoded({ extended: true }));`: Middleware para analizar datos de formularios.
   - `console.log("Datos del formulario antes/después del middleware de análisis:", req.body);`: Registra los datos del formulario antes y después del middleware.

3. **Configuración para Pug:**
   - `app.set('view engine', 'pug');`: Configura el motor de vistas como Pug.
   - `app.set('views', path.join(__dirname, 'views'));`: Establece la ruta para las vistas.

4. **Configuración para Analizar Datos en Formato JSON:**
   - `app.use(bodyParser.urlencoded({ extended: true }));`: Middleware para analizar datos en formato JSON.

5. **Rutas de la API:**
   - `app.use('/api/v1', v1WorkoutRoutes);`: Usa las rutas de la versión 1 de la API.

6. **Inicio del Servidor:**
   - `app.listen(PORT, () => { console.log(`Server listening on port ${PORT}.`); });`: Inicia el servidor en el puerto especificado o en el puerto 3000 si no se proporciona.

## Controller>workoutController.js
## Controlador de Entrenamientos

Este archivo (`workoutController.js`) contiene el código que define las funciones del controlador para gestionar las solicitudes relacionadas con los entrenamientos en tu aplicación. El controlador actúa como una capa intermedia entre las rutas de la aplicación y los servicios encargados de la lógica empresarial y la interacción con la base de datos.

### Funciones del Controlador

#### 1. Obtener todos los entrenamientos y renderizar la página con la lista

- **Función:** `getAllWorkouts`
- **Descripción:** Esta función utiliza el servicio `workoutService` para obtener todos los entrenamientos de la base de datos. Luego, renderiza la página principal (`index`) con la lista de entrenamientos.

#### 2. Obtener un entrenamiento por su ID y devolver los datos en formato JSON

- **Función:** `getOneWorkout`
- **Descripción:** Esta función utiliza el servicio `workoutService` para obtener los datos de un entrenamiento específico según su ID. Devuelve los datos en formato JSON.

#### 3. Renderizar la página del formulario de creación

- **Función:** `renderCreateForm`
- **Descripción:** Esta función simplemente renderiza la página del formulario de creación (`create`), proporcionando el título correspondiente.

#### 4. Crear un nuevo entrenamiento y devolver la respuesta

- **Función:** `createNewWorkout`
- **Descripción:** Esta función maneja la creación de un nuevo entrenamiento utilizando los datos recibidos del formulario. Verifica la existencia de campos obligatorios y llama al servicio `workoutService` para realizar la creación.

#### 5. Renderizar la página del formulario de actualización

- **Función:** `renderUpdateForm`
- **Descripción:** Esta función renderiza la página de formulario de actualización (`actualizar`), proporcionando los detalles del entrenamiento específico que se va a actualizar.

#### 6. Actualizar un entrenamiento y devolver la respuesta

- **Función:** `updateOneWorkout`
- **Descripción:** Esta función maneja la actualización de un entrenamiento según los datos recibidos del formulario. Llama al servicio `workoutService` para realizar la actualización.

#### 7. Renderizar la página del formulario de eliminación

- **Función:** `renderDeleteForm`
- **Descripción:** Esta función renderiza la página de formulario de eliminación (`eliminar`), proporcionando los detalles del entrenamiento que se va a eliminar.

#### 8. Eliminar un entrenamiento y devolver la respuesta

- **Función:** `deleteOneWorkout`
- **Descripción:** Esta función maneja la eliminación de un entrenamiento según su ID. Llama al servicio `workoutService` para realizar la eliminación.

### Uso

Estas funciones del controlador están diseñadas para ser utilizadas en las rutas de tu aplicación Express. Cada función corresponde a una acción específica que se puede realizar en la gestión de entrenamientos.

```javascript
// Ejemplo de uso en una ruta
const express = require('express');
const router = express.Router();
const workoutController = require('./workoutController');

// Obtener todos los entrenamientos y renderizar la página principal
router.get('/allWorkouts', workoutController.getAllWorkouts);

// Obtener un entrenamiento por ID y devolver los datos en formato JSON
router.get('/getWorkout/:workoutId', workoutController.getOneWorkout);

// Renderizar la página del formulario de creación
router.get('/createWorkout', workoutController.renderCreateForm);

// Crear un nuevo entrenamiento y devolver la respuesta
router.post('/createWorkout', workoutController.createNewWorkout);

// Renderizar la página del formulario de actualización
router.get('/updateWorkout/:workoutId', workoutController.renderUpdateForm);

// Actualizar un entrenamiento y devolver la respuesta
router.post('/updateWorkout/:workoutId', workoutController.updateOneWorkout);

// Renderizar la página del formulario de eliminación
router.get('/deleteWorkout/:workoutId', workoutController.renderDeleteForm);

// Eliminar un entrenamiento y devolver la respuesta
router.post('/deleteWorkout/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
