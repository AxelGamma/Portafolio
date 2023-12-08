const express = require('express');
const connectToDatabase = require('./database/workoutConnection');
const v1WorkoutRoutes = require('./v1/routes/workoutRoutes');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

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

app.use('/api/v1', v1WorkoutRoutes);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
});
