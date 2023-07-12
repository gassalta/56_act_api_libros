const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
}, { collection: 'libros', versionKey: false }); // Se le quita el versionado de documento
const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro;