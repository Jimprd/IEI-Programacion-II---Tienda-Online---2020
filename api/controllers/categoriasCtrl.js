const modelo = require("../models/Categorias");


function index(req, res) {
  modelo
    .find({})
    .then((categorias) => {
      if (categorias.length)
        return res
          .status(200)
          .send({ message: "Mostrando todas los categorias", categorias });
      return res.status(204).send();
    })
    .catch((error) => res.status(500).send({ error }));
}


function create(req, res) {
  let categoria = new modelo(req.body);
  categoria
    .save()
    .then((categoria) =>
      res
        .status(201)
        .send({ message: "Categoría creada exitosamente!", categoria })
    )
    .catch((error) => {
      res.status(500).send({ message: "Se rompió algo por acá:", error }),
        console.log(error);
    });
}


function remove(req, res) {
  console.log("REQ", req.body.resultado);
  if (req.body.error) return res.status(500).send({ message: 'Error interno del servidor' });
  console.log("REQ2", req.body);
  if (!req.body.resultado) return res.status(404).send({ message: 'Categoría no encontrada' });
  req.body.resultado[0]
    .remove()
    .then((result) => res.status(200).send({ message: "Se eliminó: ", result }))
    .catch(error => res.status(500).send({ message: "El error de acá ", error }));
  console.log("Lo Del ERROR", error);
}

function buscar(req, res, next) {
  let query = {};
  query[req.params.clave] = req.params.valor;
  modelo
    .find(query)
    .then((resultado) => {
      if (!resultado.length) return next();
      req.body.resultado = resultado;
      console.log('[------>] Buscar' + req.body.resultado);
      return next();
    })
    .catch((error) => {
      req.body.error = error;
      next();
    });
}


module.exports = {
  index,
  create,
  remove,
  buscar,
};