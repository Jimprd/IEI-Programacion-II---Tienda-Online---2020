const [Router, productoController] = [require('express').Router(), require('../controllers/productoController')];

Router.get('/', productoController.index)  // listar todos los productos, esta ruta va a ser manejada por el controlador index
      .post('/', productoController.create)
      .get('/:clave/:valor', productoController.buscar, productoController.show) // ---.com/product/category/Hogar   ruta manejada por el controlador show, que muestra un producto en específico
      .put('/:clave/:valor', productoController.buscar, productoController.update) // ---.com/product/name/smartTv    
      .delete('/:clave/:valor', productoController.buscar, productoController.remove); // ---.com/product/name/smartTv

module.exports = Router;