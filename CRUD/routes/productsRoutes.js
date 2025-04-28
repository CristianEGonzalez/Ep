const { Router } = require('express');
const routes = Router()
const productosController = require('../controllers/productsController')

routes.get('/', productosController.mostrarProductos)
routes.get('/:id', productosController.mostrarProducto)
routes.post('/', productosController.agregarProducto)
routes.patch('/:id', productosController.modificarProducto)
routes.put('/:id', productosController.reemplazarProducto)
routes.delete('/:id', productosController.eliminarProducto)

module.exports = routes