const [Router, controlador] = [require('express').Router(), require('../controllers/clienteCtrl')];

Router.get('/', controlador.index)  // listar todos los productos, esta ruta va a ser manejada por el controlador index
      .post('/', controlador.create)
      .get('/:clave/:valor', controlador.buscar, controlador.show) // ---.com/product/category/Hogar   ruta manejada por el controlador show, que muestra un producto en específico
      .put('/:clave/:valor', controlador.buscar, controlador.update) // ---.com/product/name/smartTv    
      .delete('/:clave/:valor', controlador.buscar, controlador.remove); // ---.com/product/name/smartTv

module.exports = Router;