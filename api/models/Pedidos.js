const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.ObjectId,
    ref: "clientes",
  },
  pedido: [
    {
      producto: {
        type: mongoose.Schema.ObjectId,
        ref: "productos",
      },
      cantidad: Number,
    },
  ],
  total: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("pedidos", pedidoSchema);