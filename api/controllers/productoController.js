const productoModel = require("../models/Producto");

const parametros = {
  _id: 1,
  nombre: 1,
  precio: 1,
};

// .find({}).select('_id -precio') // otro formato, excluye precio

function index(req, res) {
  productoModel
    .find({})
    .select(parametros)
    .then((products) => {
      if (products.length)
        return res
          .status(200)
          .send({ products } || { message: "Mostrando Todos Los Productos" });
      return res.status(204).send({ message: "No se encontraron productos" });
    })
    .catch((error) => res.status(500).send({ error }));
}

function show(req, res) {
  //(en pila) viene del middleware buscar(), asique solo comprobamos los resultados que devuelve
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.products)
    return res.status(404).send({ message: "Producto No Encontrado" });
  let products = req.body.products;
  return res.status(200).send({ products });
}

function create(req, res) {
  let product = new productoModel(req.body);
  product
    .save()
    .then((product) =>
      res
        .status(201)
        .send({ message: "Producto cargado exitosamente!", product })
    )
    .catch((error) => {
      res.status(500).send({ message: "Se rompió algo por acá:", error }),
        console.log(error);
    });
}

function update(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.products)
    return res.status(404).send({ message: "Producto No Encontrado" });
  let product = req.body.products[0];
  product = Object.assign(product, req.body);
  product
    .save()
    .then((product) =>
      res.status(200).send({ message: "Se Actualizó: ", product })
    )
    .catch((error) => res.status(500).send({ error }));
}

function remove(req, res) {
  if (req.body.error) return res.status(500).send({ error });
  if (!req.body.products)
    return res.status(404).send({ message: "Producto No Encontrado" });
  req.body.products[0]
    .remove()
    .then((product) => res.status(200).send({ message: "Se Eliminó", product }))
    .catch((error) => res.status(500).send({ error }));
}

// utilizaremos esta funcion como un middleware
function buscar(req, res, next) {
  let query = {};
  query[req.params.clave] = req.params.valor;
  productoModel
    .find(query)
    .then((products) => {
      if (!products.length) return next(); // si no existen resultados en la búsqueda paso a la siguiente función
      req.body.products = products; // si existen, los recojo y recién ahí paso a la siguiente función
      // console.log('[------>] Buscar' + req.body.products);
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
