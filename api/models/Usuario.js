const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
    type: String,
    trim: true,
    required: [true, 'Ingrese su nombre']
    },
    apellido: {
    type: String,
    trim: true,
    required: [true, 'Ingrese su apellido']
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Ingrese su e-mail'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const usuarioModel = mongoose.model('usuarios', usuarioSchema);
module.exports = usuarioModel;