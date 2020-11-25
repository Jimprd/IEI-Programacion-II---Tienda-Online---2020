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
    trim: true,
    required: [false, "Ingrese el código del artículo"],
    unique: false,
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
    required: [true, 'Debe ingresar el precio del producto']
  },
  stock: {
    type: Number,
    trim: true,
    default: 10,
    min: 0,
  },
  categoria: {
    type: String,
  },
  foto: {
   type: String,
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
 * 1º param: nombre de la collection en la db. Es CASE-SENSITIVE, por convención se suele usar siempre es en minúscula
 * 2º param: es el Schema de la colletion
 */

const productoModel = mongoose.model("productos", productoSchema); // IMPORTANTE mongoose.model

// Exportamos el modelo para poder utilizarlo desde el CONTROLADOR
module.exports = productoModel;

/**
 * If a collection does not exist, MongoDB creates the collection when you first store data for
 * that collection.
 */


 /**
  * Querys
  *  
  * Vista todos los productos:
  * const parametros = {_id: 1, nombre: 1, precio: 1};
  * db.productos.find({}).select(parametros);
  * 
  * Vista de Producto
  * db.productos.find(); 
  */