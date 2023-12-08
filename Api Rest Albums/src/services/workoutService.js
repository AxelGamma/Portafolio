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
