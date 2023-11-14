const mongoose = require('mongoose');
const { Schema } = mongoose;

const AgendaSchema = new Schema({
    Nombre: String,
    Fecha: String,
    Artista: String
});

const AgendaModel = mongoose.model('discos', AgendaSchema);

module.exports = AgendaModel;