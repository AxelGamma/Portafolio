const express = require('express')
const router = express.Router()
const controller = require('../controller/index-controller')

// Ruta raíz: http://localhost:3000/
router.get('/', controller.index);

// Ruta "/acerca-de": http://localhost:3000/Crear
//res.render('create'); hace referencia a la vista create.hbs en la carpeta views
router.get('/Crear', (req, res) => {
  res.render('create');
});

router.get('/leer', (req, res) => {
  res.render('leer');
});

//para que sirve la siguiente linea?
//router.post('/Crear', controller.create); // Procesa la solicitud de creación de un nuevo registro
router.post('/Alta', controller.create)
//http://localhost:3000/actualizar/65413f7747a86b08ca0e3219
router.get('/actualizar/:id', controller.getActualizar); // Renderiza el formulario de actualización
router.post('/actualizar/:id', controller.postActualizar); // Procesa la solicitud de actualización

//eliminar registro : http://localhost:3000/eliminar/
router.get('/eliminar/:id', controller.delete); // Renderiza el formulario de eliminación

// Ruta "/contacto": http://localhost:3000/contacto
router.get('/contacto', controller.index3);

// Ruta dinámica con parámetro: http://localhost:3000/producto/123
router.get('/producto/:id', controller.index4);

module.exports = router