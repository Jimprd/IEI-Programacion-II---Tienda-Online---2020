const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.ObjectId,
    ref: "clientes",
    nombre: String,
    apellido: String,
  },
  items: [
    {
      producto: {
        type: mongoose.Schema.ObjectId,
        ref: "productos",
        nombre: String,
        precio: Number
      },
      cantidad: Number,
      subtotal: Number,
    }
  ],
  costoTotal: {
    type: Number,
  },
  tipoEntrega: ["Retiro del local.","Acordar con el vendedor."],
  date: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("pedidos", pedidoSchema);