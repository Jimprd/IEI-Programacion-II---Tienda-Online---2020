const [Router, controlador] = [require('express').Router(), require('../controllers/categoriasCtrl')];

Router.get('/', controlador.index)  
      .post('/', controlador.create)
      .delete('/:clave/:valor', controlador.buscar, controlador.remove);
      // .get('/:clave/:valor', controlador.buscar, controlador.show)
      // .put('/:clave/:valor', controlador.buscar, controlador.update)     

module.exports = Router;