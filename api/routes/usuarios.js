const [Router, controlador] = [require('express').Router(), require('../controllers/usuarioCtrl')];

Router.get('/', controlador.index)  
      .post('/', controlador.create)
      .get('/:clave/:valor', controlador.buscar, controlador.show) 
      .put('/:clave/:valor', controlador.buscar, controlador.update) 
      .delete('/:clave/:valor', controlador.buscar, controlador.remove); 

module.exports = Router;