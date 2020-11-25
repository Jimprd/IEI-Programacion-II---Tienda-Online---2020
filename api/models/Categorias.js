const mongoose = require("mongoose");

const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    trim: true,
    required: [true, "Debe ingresar el nombre de categoria"],
    unique: true,
  },
  descripcion: {
    type: String,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("categorias", categoriaSchema);