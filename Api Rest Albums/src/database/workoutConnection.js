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
