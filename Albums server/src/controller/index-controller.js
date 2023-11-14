const controller = {}
const connection = require('../dbConnection/connection')
const mongoose = require('mongoose')
const AgendaModel = require('../models/Agenda.model')
const readline = require('readline')
connection()

controller.index = async (req, res) => {
  try {
    const datos = await AgendaModel.find();
    res.render('index', { datos });
    console.log(datos)
  } catch (error) {
    console.error('Error al consultar la BD:', error);
    // Envía una respuesta de error al cliente con el estado 500 (Error interno del servidor).
    res.status(500).send('Error interno del servidor');
  }
};

//Alta
controller.create = async (req, res) => {
  try {
    const { Nombre, Fecha, Artista } = req.body;
    const nuevoRegistro = await AgendaModel.create({
      Nombre,
      Fecha,
      Artista,
    });

    res.status(201).json(nuevoRegistro); // O renderiza una vista o envía una respuesta JSON, según tus necesidades.
  } catch (error) {
    console.error('Error al crear un registro:', error);
    res.status(500).send('Error interno del servidor');
  }
};

controller.getActualizar = async (req, res) => {
  try {

    const id = req.params.id;
    const registro = await AgendaModel.findById(id); // Recupera el registro por su ID
    res.render('actualizar', { datos: registro });
  } catch (error) {
    console.error('Error al obtener el registro:', error);
    res.status(500).send('Error interno del servidor');
  }
};

controller.postActualizar = async (req, res) => {
  try {
    const id = req.params.id;
    const { Nombre, Apellidos, Direccion } = req.body;

    await AgendaModel.findByIdAndUpdate(id, { Nombre, Apellidos, Direccion });

    res.redirect('/'); // Redirige a la página principal después de la actualización
  } catch (error) {
    console.error('Error al actualizar el registro:', error);
    res.status(500).send('Error interno del servidor');
  }
};

// Eliminación
controller.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedRegistro = await AgendaModel.findByIdAndDelete(id);

    if (!deletedRegistro) {
      // Si no se encuentra el registro, responde con un estado 404 (No encontrado).
      return res.status(404).send('Registro no encontrado');
    }

    res.status(200).json({ message: 'Registro eliminado correctamente', deletedRegistro });
  } catch (error) {
    console.error('Error al eliminar el registro:', error);
    res.status(500).send('Error interno del servidor');
  }
}

controller.index3 = (req, res) => {
  // Maneja las solicitudes GET en la ruta "/contacto"
  // y envía una respuesta de texto al cliente
  res.send('Puedes contactarnos en contacto@ejemplo.com');
}

controller.index4 = (req, res) => {
  // Maneja las solicitudes GET en rutas como "/producto/123"
  // Captura el valor del parámetro "id" y lo utiliza en la respuesta
  const idProducto = req.params.id;
  res.send(`Detalles del producto ${idProducto}`);
}



module.exports = controller