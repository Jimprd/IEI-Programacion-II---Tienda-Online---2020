const usuarioModel = require('../models/Usuario');

function index(req, res){

  usuarioModel.find({})
  .then(usuarios => {
    if(usuarios.length) return res.status(200).send({ message: 'Muestra Todos Los Usuarios', usuarios});
    return res.status(204).send({ message: 'No se encontraron usuarios' });
  })
  .catch((error => res.status(500).send({error})));
}

function show(req, res){
 if(req.params.error) return res.status(500).send({error}); // acá estamos devolviendo el error, por seguridad no sería mejor devolver solo un mensaje y mandar el error a un log de forma privada???
 if(!req.body.usuario) return res.status(404).send({message: 'Usuario No Encontrado'});
 let usuario = req.body.usuario;
 return res.status(200).send({usuario});
}

function create(req, res){
  console.info("REQUEST", req.body)
 let usuario = new usuarioModel(req.body);
 usuario.save()
 .then((usuario) => res.status(201).send({message: "La cuenta se creó correctamente.", usuario}))
 .catch((error) => res.status(500).send({error}));
}

function update(req, res){
 if(req.body.error) return res.status(500).send({error});
 if(!req.body.usuario) return res.status(404).send({message: 'Usuario No Encontrado'});
 let usuario = req.body.usuario[0];
 usuario = Object.assign(usuario, req.body);
 usuario.save()
 .then(usuario => res.status(200).send({message: 'Se actualizó: ', usuario}))
 .catch(error => res.status(500).send({error}));
}

function remove(req, res){
 if(req.body.error) return res.status(500).send({error});
 if(!req.body.usuario) return res.status(404).send({message: 'Usuario No Encontrado'});
 req.body.usuario[0].remove().then(usuario => res.status(200).send({message: 'Se Eliminó', usuario}))
 .catch(error => res.status(500).send({error}));
}

function buscar(req, res, next) {
  let query = {};
  query[req.params.clave] = req.params.valor;
  usuarioModel.find(query).then(usuario => {
      if(!usuario.length) return next();
      req.body.usuario = usuario;
      // console.log('[------>] Buscar' + req.body.usuario);
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