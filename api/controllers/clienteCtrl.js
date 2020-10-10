const Model = require('../models/Clientes');

function index(req, res){
 Model.find({})
 .then(clientes => {
  if(clientes.length) return res.status(200).send({clientes});
  return res.status(204).send({message: 'No se encontraron Clientes'})
 })
 .catch((error => res.status(500).send({error})));
}

function show(req, res){
  if(req.params.error) return res.status(500).send({error});
 if(!req.body.cliente) return res.status(404).send({message: 'Usuario No Encontrado'});
 let cliente = req.body.cliente;
 return res.status(200).send({cliente});
}

function create(req, res){
console.info(`Antes del modelo:\n ${req.body}`);
let cliente = new Model(req.body);
console.info(`Después del modelo:\n ${cliente}`);
cliente.save()
.then((cliente) => res.status(200).send({cliente}))
.catch((error) => res.status(500).send({error}));
}

function update(req, res){
 if(req.body.error) return res.status(500).send({message: 'Error interno del servidor'}); 
 if(!req.body.cliente) return res.status(404).send({message: 'Cliente No Encontrado'});
 let cliente = req.body.cliente[0];
 cliente = Object.assign(cliente, req.body);
 cliente.save()
 .then(cliente => res.status(200).send({message: `Se actualizó: ${cliente}`}))
 .catch(error => res.status(500).send({error}));
}

function remove(req, res){
  if(req.body.error) return res.status(500).send({message: 'Error interno del servidor'});
  if(!req.body.cliente) return res.status(404).send({message: 'Cliente No Encontrado'});
 req.body.cliente[0].remove()
 .then(cliente => res.status(200).send({message: `Se eliminó: ${cliente}`}))
 .catch(error => res.status(500).send({error}));
}

function buscar(req, res, next){
 let query = {};
 query[req.params.clave] = req.params.valor;
 Model.find(query).then( cliente => {
  if(!cliente.length) return next();
  req.body.cliente = cliente;
  return next();
 }).catch(error => {
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
  }