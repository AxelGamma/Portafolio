const express = require('express');
const router = express.Router();
const workoutController = require('../../controller/workoutController');



//Ruta http://localhost:3000/api/v1/datos
router.get('/datos', workoutController.getAllWorkouts);

//Ruta http://localhost:3000/api/v1/
router.get('/', workoutController.getOneWorkout);

/* //Ruta http://localhost:3000/api/v1/createnew
router.post('/createnew', workoutController.createNewWorkout);
 */
// Ruta para renderizar el formulario
router.get('/createnew', workoutController.renderCreateForm);

// Ruta para procesar el formulario POST
router.post('/Create', workoutController.createNewWorkout);

// Ruta para renderizar la página de actualización de registro
router.get('/actualizar/:workoutId', workoutController.renderUpdateForm);

//Ruta http://localhost:3000/:workoutId
router.post('/update/:workoutId', workoutController.updateOneWorkout);

// Ruta para renderizar la página de eliminación de registro
router.get('/eliminar/:workoutId', workoutController.renderDeleteForm);

// Ruta para procesar la eliminación del registro
router.post('/delete/:workoutId', workoutController.deleteOneWorkout);

/* Get,Post,Patch,Delete */


module.exports = router;

