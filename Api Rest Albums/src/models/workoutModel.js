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
