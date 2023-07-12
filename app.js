const express = require('express');
const { auth } = require("express-oauth2-jwt-bearer");

// Importamos el Router de Libros
const librosRouter = require('./routes/libros');
// Importamos el Middleware Error Handler
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: 'http://localhost:3000/api/libros',
    issuerBaseURL: 'https://dev-wgyq7r736s6xuz7n.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

// Para que reciba y responda en JSON
app.use(express.json());

// ruta base
app.get("/", (req, res) => {
    res.send("APi de libros")
});


//Configuramos el middleware de autenticacion
app.use('/api/libros', autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});