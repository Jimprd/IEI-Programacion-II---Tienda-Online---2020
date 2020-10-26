// const productoModel, controlador = [require("../models/Pedidos"), require("./controladorBase")];
// const productoModel, controlador = require("../models/Pedidos","./controladorBase");

const modelo = require("../models/Pedidos");

const parametros = {
  _id: 1,
  nombre: 1,
  precio: 1,
};

// .find({}).select('_id -precio') // otro formato, excluye precio

function index(req, res) {
  modelo
    .find({})
    .then((pedidos) => {
      if (pedidos.length)
        return res
          .status(200)
          .send({ message: "Mostrando todos lo pedidos", pedidos });
      return res.status(204).send({ message: "No se encontraron pedidos" });
    })
    .catch((error) => res.status(500).send({ error }));
}

function show(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.resultado)
    return res.status(404).send({ message: "Pedido No Encontrado" });
  let pedido = req.body.resultado;
  return res.status(200).send({ pedido });
}

function create(req, res) {
  let pedidos = new modelo(req.body);
  pedidos
    .save()
    .then((pedidos) =>
      res
        .status(201)
        .send({ message: "Pedido generado exitosamente!", pedidos })
    )
    .catch((error) => {
      res.status(500).send({ message: "Se rompió algo por acá:", error }),
        console.log(error);
    });
}

function update(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.resultado)
    return res.status(404).send({ message: "Pedido No Encontrado" });
  let pedido = req.body.resultado[0];
  pedido = Object.assign(pedido, req.body);
  pedido
    .save()
    .then((pedido) =>
      res.status(200).send({ message: "Se Actualizó: ", pedido })
    )
    .catch((error) => res.status(500).send({ error }));
}

function remove(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.resultado)
    return res.status(404).send({ message: "Pedido No Encontrado" });
  req.body.resultado[0]
    .remove()
    .then((pedido) => res.status(200).send({ message: "Se Eliminó: ", pedido }))
    .catch((error) => res.status(500).send({ error }));
}

//Esta función se usa como un middleware
function buscar(req, res, next) {
  let query = {};
  query[req.params.clave] = req.params.valor;
  modelo
    .find(query)
    .then((resultado) => {
      if (!resultado.length) return next();
      req.body.resultado = resultado;
      // console.log('[------>] Buscar' + req.body.resultado);
      return next();
    })
    .catch((error) => {
      req.body.error = error;
      next();
    });
}

module.exports = {
  index,
  show,
  create,
  update,
  remove,
  buscar,
};
