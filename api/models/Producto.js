const mongoose = require("mongoose");

/**
 * SCHEMA
 * Todo en Mongoose comienza con un Schema. Cada Schema se asigna a una collection de MongoDB
 * y define la forma de los documents dentro de esa collection.
 *
 * Definido el Schema con sus propiedades (ej: nombre, que será un string). El siguiente paso
 * es compilarlo en un MODEL.
 */

const productoSchema = new mongoose.Schema({
  codigoArticulo: {
    type: String,
    required: false,
    unique: false,
    trim: true
  },
  nombre: {
    type: String,
    trim: true,
    required: [true, 'Debe ingresar el nombre del producto'],
    unique: true 
  },
  descripcion: {
    type: String,
    trim: true
  },
  precio: {
    type: Number,
    trim: true,
    required: [true, 'Debe ingresar el valor del producto']
  },
  stock: {
    type: Number,
    default: 10,
    min: 0,
    trim: true
  },
  categoria: {
    String,
  },
  foto: {
    String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

/**
 * Convertimos el Schema en MODEL:
 * es una class con la que construimos documents. En este caso, cada document será
 * un "producto" con las propiedades y comportamientos declarados en nuestro Schema.
 *
 * 1º param: nombre de la collection en la db. Es CASE-SENSITIVE, por convencion siempre es en minúscula
 * 2º param: es el Schema de la colletion
 */

const productoModel = mongoose.model("producto", productoSchema); // IMPORTANTE mongoose.model

// Exportamos el modelo para poder utilizarlo desde el CONTROLADOR
module.exports = productoModel;

/**
 * If a collection does not exist, MongoDB creates the collection when you first store data for
 * that collection.
 */
