const mongoose = require('mongoose')
//password contiene la contraseña de la base de datos
const password = 'INyr8UqgBNTTFD5n'
//dbname contiene el nombre de la base de datos
const dbname = 'ColeccionDiscos2' 
//uri contiene la dirección de la base de datos
const uri = `mongodb+srv://axelhgbryan:${password}@cluster0.ukvg6nn.mongodb.net/${dbname}?retryWrites=true&w=majority`


const connectToDatabase = async () => {
    try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Conexión a MongoDB establecida correctamente');
    
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
    }
  };

    
  module.exports = connectToDatabase

// mongodb+srv://axelhgbryan:<password>@cluster0.ukvg6nn.mongodb.net/?retryWrites=true&w=majority