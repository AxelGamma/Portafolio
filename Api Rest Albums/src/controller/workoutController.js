// workoutController.js

const workoutService = require("../services/workoutService");

// Obtener todos los entrenamientos y renderizar la página con la lista
const getAllWorkouts = async (req, res) => {
    try {
        // Obtener todos los entrenamientos desde el servicio
        const allWorkouts = await workoutService.getAllWorkouts();

        // Renderizar la página 'index' con la lista de entrenamientos
        res.render('index', { title: 'Albums', workouts: allWorkouts });
    } catch (error) {
        // Manejar errores y renderizar la página de error
        res.status(500).render('error', { title: 'Error', message: 'Error al obtener los entrenamientos', error: error.message });
    }
};

// Obtener un entrenamiento por su ID y devolver los datos en formato JSON
const getOneWorkout = async (req, res) => {
    try {
        // Obtener un entrenamiento por su ID desde el servicio
        const workout = await workoutService.getOneWorkout(req.params.workoutId);

        // Devolver los datos en formato JSON
        res.status(200).json({ status: 'Success', data: workout });
    } catch (error) {
        // Manejar errores y devolver un mensaje de error en formato JSON
        res.status(500).json({ status: 'Error', message: `Error al obtener el entrenamiento con ID ${req.params.workoutId}`, error: error.message });
    }
};

// Renderizar la página del formulario de creación
const renderCreateForm = (req, res) => {
    // Renderizar la página del formulario de creación
    res.render('create', { title: 'Crear Nuevo Album' });
};

// Crear un nuevo entrenamiento y devolver la respuesta
const createNewWorkout = async (req, res) => {
    console.log("Datos recibidos del formulario:", req.body);
    try {
        const { body } = req;

        // Verificar la existencia de campos obligatorios
        if (!body.Nombre || !body.Fecha || !body.Artista) {
            return res.status(400).send({ status: "Error", message: "Campos obligatorios faltantes" });
        }

        // Llamar al servicio para crear un nuevo entrenamiento
        const createdWorkout = await workoutService.createNewWorkout(body);

        // Enviar respuesta con mensaje de éxito
        res.status(201).send({ status: "OK", data: createdWorkout });
    } catch (error) {
        // Manejar errores y devolver un mensaje de error en formato JSON
        console.error("Error al crear un nuevo álbum:", error);
        res.status(500).send({ status: "Error", message: "Error al crear un nuevo álbum", error: error.message });
    }
};

// Renderizar la página del formulario de actualización
const renderUpdateForm = async (req, res) => {
    try {
        // Obtener datos del entrenamiento por su ID desde el servicio
        const workoutId = req.params.workoutId;
        const workoutData = await workoutService.getOneWorkout(workoutId);

        // Renderizar la página de formulario de actualización con los detalles del entrenamiento
        res.render('actualizar', { title: 'Actualizar Registro', datos: workoutData });
    } catch (error) {
        // Manejar errores y renderizar la página de error
        console.error("Error al renderizar la página de actualización:", error);
        res.status(500).render('error', { title: 'Error', message: 'Error al renderizar la página de actualización', error: error.message });
    }
};

// Actualizar un entrenamiento y devolver la respuesta
const updateOneWorkout = async (req, res) => {
    try {
        const {
            body,
            params: { workoutId },
        } = req;

        // Verificar si hay un ID de entrenamiento
        if (!workoutId || !body) {
            return res.status(400).send({ status: "Error", message: "ID de entrenamiento o datos no proporcionados" });
        }

        // Llamar al servicio para actualizar el entrenamiento
        const updatedWorkout = await workoutService.updateOneWorkout(workoutId, body);

        // Enviar respuesta con mensaje de éxito
        res.send({ status: "OK", message: "Entrenamiento actualizado con éxito", data: updatedWorkout });
    } catch (error) {
        // Manejar errores y devolver un mensaje de error en formato JSON
        console.error("Error al actualizar el entrenamiento:", error);
        res.status(500).send({ status: "Error", message: "Error al actualizar el entrenamiento", error: error.message });
    }
};

// Renderizar la página del formulario de eliminación
const renderDeleteForm = async (req, res) => {
    try {
        // Obtener datos del entrenamiento por su ID desde el servicio
        const workoutId = req.params.workoutId;
        const workoutData = await workoutService.getOneWorkout(workoutId);

        // Renderizar la página de formulario de eliminación con los detalles del entrenamiento
        res.render('eliminar', { title: 'Eliminar Registro', datos: workoutData });
    } catch (error) {
        // Manejar errores y renderizar la página de error
        console.error("Error al renderizar la página de eliminación:", error);
        res.status(500).render('error', { title: 'Error', message: 'Error al renderizar la página de eliminación', error: error.message });
    }
};

// Eliminar un entrenamiento y devolver la respuesta
const deleteOneWorkout = async (req, res) => {
    try {
        // Llamar al servicio para eliminar el entrenamiento por su ID
        await workoutService.deleteOneWorkout(req.params.workoutId);

        // Enviar respuesta con mensaje de éxito
        res.status(200).json({
            status: 'Success',
            message: `Entrenamiento con ID ${req.params.workoutId} eliminado`
        });
    } catch (error) {
        // Manejar errores y devolver un mensaje de error en formato JSON
        res.status(500).json({
            status: 'Error',
            message: `Error al eliminar el entrenamiento con ID ${req.params.workoutId}`,
            error: error.message
        });
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
    renderCreateForm,
    renderUpdateForm,
    renderDeleteForm
};
