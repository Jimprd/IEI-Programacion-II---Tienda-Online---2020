const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim : true,
        required: [true, 'Ingrese su nombre']
    },
    apellido : {
        type: String,
        trim : true,
        required: [true, 'Ingrese su apellido']
    },
    empresa : {
        type: String,
        trim: true
    },
    email : {
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
    telefono : {
        type: String, 
        trim: true
    }
});

module.exports = mongoose.model('cliente', clienteSchema);